const util = require("util");
const exec = util.promisify(require("child_process").exec);
const readFileLines = require("./helpers").readFileLines;
const logger = require("./logger");


const flowsScript = process.env.NODE_ENV === "dev" ? "echo" : "/tce/etc/wanos/flows";
const portObjectsPath = process.env.NODE_ENV === "dev" ? "/wanos/portobjects" : "/etc/wanos/portobjects";
const dpiProtocolsPath = process.env.NODE_ENV === "dev" ? "/wanos/dpi.protocols" : "/etc/wanos/dpi.protocols";
const nfL0PortsPath = "/wanos/nf/l0/ports";
const nfW0PortsPath = "/wanos/nf/w0/ports";

let gPortObjects = null;
let gDpiProtocols = null;

class ProtocolReporter {
  constructor() {}

  async getTopPorts(time, topN, peer) {
    time = time || 1800;
    topN = topN || 50;
    peer = peer || "any";

    // Run the wanos script that generates the nfdump output.
    await exec(`${flowsScript} ${time} ports ${peer}`);

    let lanMap = await this._parseNfPortsFile(nfL0PortsPath);
    let wanMap = await this._parseNfPortsFile(nfW0PortsPath);

    let lanArray = Array.from(lanMap.values());
    // Sort in descending order by lan bytes
    lanArray.sort((a, b) => { return b.bytes - a.bytes; });

    let result = [];
    for (let i = 0; i < topN && i < lanArray.length; i++) {
      let lanProtocol = lanArray[i];
      let wanProtocol = wanMap.get(lanProtocol.port);
      if (wanProtocol !== undefined) {
        lanProtocol.wanBytes = wanProtocol.bytes;
      } else {
        lanProtocol.wanBytes = 0;
      }
      lanProtocol.percentage = lanProtocol.percentage.toFixed(1);
      lanProtocol.lanBytes = lanProtocol.bytes;
      delete lanProtocol.bytes;
      result.push(lanProtocol);
    }
    return result;
  }

  async _parseNfPortsFile(portsFilePath) {
    let portObjects = await this._getPortObjects();
    let dpiProtocols = await this._getDpiProtocols();
    let map = new Map();

    let fileLines = await readFileLines(portsFilePath);
    for (let line of fileLines) {
      if (!line.includes("-")) {
        continue;
      }
      let parts = line.split(",");
      let dpiProt = Number(parts[4]);
      let label = "";
      if (dpiProt < 1000) {
        label = dpiProtocols[dpiProt];
      } else {
        let lowPort = dpiProt - 1000;
        let key = `${lowPort}/6`;
        if (portObjects.hasOwnProperty(key)) {
          label = portObjects[key][1];
        } else {
          label = `TCP ${lowPort}`;
        }
      }
      let percentage = Number(parts[10]);
      let bytes = Number(parts[9]);

      let protocol = {
        label: label,
        bytes: bytes,
        percentage: percentage,
        port: dpiProt
      };
      map.set(dpiProt, protocol);
    }
    return map;
  }

  async _getPortObjects() {
    if (gPortObjects === null) {
      gPortObjects = await this._loadPortObjects();
    }
    return gPortObjects;
  }

  async _getDpiProtocols() {
    if (gDpiProtocols === null) {
      gDpiProtocols = await this._loadDpiProtocols();
    }
    return gDpiProtocols;
  }

  async _loadPortObjects() {
    let portObjects = {};
    let lines = await readFileLines(portObjectsPath);

    for (let line of lines) {
      let parts = line.split(",").map(x => x.trim());
      if (parts.length !== 3) {
        logger.warn(`Invalid line in ${portObjectsPath}: ${line}`);
        continue;
      }
      if (parts[2] === "") {
        parts[2] = parts[1];
      }
      portObjects[parts[0]] = parts.slice(1);
    }

    return portObjects;
  }

  async _loadDpiProtocols() {
    let dpiProtocols = {};
    let lines = await readFileLines(dpiProtocolsPath);

    for (let line of lines) {
      let parts = line.split(",").map(x => x.trim());
      if (parts.length !== 2) {
        logger.warn(`Invalid line in ${dpiProtocolsPath}: ${line}`);
        continue;
      }
      dpiProtocols[parts[0]] = parts[1];
    }

    return dpiProtocols;
  }
}

module.exports.ProtocolReporter = ProtocolReporter;