const util = require("util");
const exec = util.promisify(require("child_process").exec);
const readFileLines = require("./helpers").readFileLines;

const wanosLicenseScript = process.env.NODE_ENV === "dev" ? "echo NAME=Plus 100/100" : "/tce/etc/wanos/makewanoscfg.sh -aqm_name";

class WanosConf {
  constructor(wanosConfFile, wanosPeersFile) {
    this.wanosConfFile = wanosConfFile;
    this.wanosPeersFile = wanosPeersFile;
    this.config = {};
    this.peers = [];
  }

  async loadConfig() {
    this.config = {};
    let configLines = await readFileLines(this.wanosConfFile);
    for (let line of configLines) {
      let kv = line.split("=").map(x => x.trim());
      if (kv.length > 2) {
        throw new Error(`Error parsing Wanos config line: ${line}`);
      }
      let key = kv[0];
      let value = kv[1];
      if (value === undefined || value === "") {
        this.config[key] = "";
      } else if (value === "true" || value === "True" || value === "TRUE" || value === "enable" || value === "Enable" || value === "ENABLE") {
        this.config[key] = true;
      } else if (value === "false" || value === "False" || value === "FALSE" || value === "disable" || value === "Disable" || value === "DISABLE") {
        this.config[key] = false;
      } else if (!isNaN(value)) {
        this.config[key] = Number(value);
      } else {
        this.config[key] = value;
      }
    }

    await this._getWanosVersion();
  }

  async loadPeers() {
    let newPeers = [];
    this.peers = [];
    let lines = await readFileLines(this.wanosPeersFile);
    for (let line of lines) {
      let parts = line.split(",").map(x => x.trim());
      if (parts.length !== 4) {
        throw new Error(`Error parsing Wanos peers line: ${line}`);
      }
      //10.1.1.1, 1, edge, 00:15:5d:01:49:05
      let peer = {
        ip: parts[0],
        output: Number(parts[1]),
        hostname: parts[2],
        mac: parts[3]
      };
      newPeers.push(peer);
    }
    this.peers = JSON.parse(JSON.stringify(newPeers));
  }

  async _getWanosVersion() {
    // NAME=Plus 1000/1000
    let licenseOutput = await exec(`${wanosLicenseScript}`);
    let licenseLine = licenseOutput.stdout;

    if (licenseLine) {
      this.config.wanosLicense = licenseLine.replace("NAME=", "").trim();
    } else {
      this.config.wanosLicense = "";
    }
  }
}

module.exports = WanosConf;