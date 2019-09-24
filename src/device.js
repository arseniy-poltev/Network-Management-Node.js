const EventEmitter = require("events");
const util = require("util");
const dns = require("dns");
const fs = require("fs");
const si = require("systeminformation");
const messages = require("./grpc/device_pb");
const ErrMessage = require("./grpc/error_pb").Error;
const config = require("./config");
const WanosConf = require("./wanos-conf");
const { ClickController, IntClickReadCommand } = require("./click/click-controller");
const { ErrorCode, RpcError } = require("./errors");
const { writeFileLines, delay, isNumber } = require("./helpers");
const logger = require("./logger");

class DeviceReporter extends EventEmitter {
  constructor(config) {
    super();
    this.config = config;

    this.wanosNic = null;
    this.wanosMac = null;
    this.networkInterfaces = null;
    this.hostname = null;

    this.wanosConf = new WanosConf(this.config.wanosConfigFile, this.config.wanosPeersFile);

    this._peersFileWatcher = null;

    // Log once counters
    this._logWanosNicNotFoundCount = 0;
    this._logWcmIp = 0;
  }

  async _setReconfigure() {
    await writeFileLines(this.config.reconfigureFile, ["1"]);
  }

  async init() {
    await this.pollWanosNic();
    await this.wanosConf.loadConfig();
    await this.wanosConf.loadPeers();
    await this.loadSysInfo();

    // Watch the peers file for any changes and emit event in case the file changed.
    this._peersFileWatcher = fs.watch(this.config.wanosPeersFile, async (eventType) => {
      if (eventType !== "change") {
        return;
      }
      await this.wanosConf.loadPeers();

      let peersReport = new messages.PeersReport();
      let peers = this.wanosConf.peers.map(x => {
        let peer = new messages.PeerInfo();
        peer.setIp(x.ip);
        peer.setOutput(x.output);
        peer.setHostname(x.hostname);
        peer.setMac(x.mac);
        return peer;
      });
      peersReport.setPeersList(peers);
      this.emit("peersUpdate", peersReport);
    });

    /**************************************************************************
      IMPORTANT: both of fs.watch and fs.watchFile are not stable.
      fs.watch is more efficient than fs.watchFile but it watches inode.
      Wanos changes configuration with sed command and makes change of inode.
      https://nodejs.org/docs/latest/api/fs.html#fs_inodes
     
      Another issue of fs.watch is modification of file permissions by 
      /tce/etc/wanos/setdir scrip when apply changes.
     ***************************************************************************/
    fs.watchFile(this.config.wanosConfigFile, async (curr, prev) => {
      if (curr.mtime.getTime() != prev.mtime.getTime()) {
        this.wanosConf.loadConfig();
        this._setReconfigure();
      }
    });
    fs.watchFile(this.config.tunnelPoliciesFile, async (curr, prev) => {
      if (curr.mtime.getTime() != prev.mtime.getTime()) {
        this._setReconfigure();
      }
    });
    fs.watchFile(this.config.trafficPoliciesFile, async (curr, prev) => {
      if (curr.mtime.getTime() != prev.mtime.getTime()) {
        this._setReconfigure();
      }
    });
  }

  cleanup() {
    if (this._peersFileWatcher) {
      this._peersFileWatcher.close();
      this._peersFileWatcher = null;
    }

    fs.unwatchFile(this.config.wanosConfigFile);
    fs.unwatchFile(this.config.tunnelPoliciesFile);
    fs.unwatchFile(this.config.trafficPoliciesFile);
    
    this.emit("cleanup");
  }

  async loadSysInfo() {
    this.networkInterfaces = await si.networkInterfaces();
    for (let nic of this.networkInterfaces) {
      if (nic.iface === this.config.wanosWanNic) {
        this.wanosMac = nic.mac;
        break;
      }
    }
    let osInfo = await si.osInfo();
    this.hostname = osInfo.hostname;
  }

  async pollWanosNic() {
    let nics = await si.networkInterfaces();
    for (let nic of nics) {
      if (this.config.wanosNic.includes(nic.iface)) {
        this._logWanosNicNotFoundCount = 0;
        this.wanosNic = nic;
        return;
      }
    }
    if (this._logWanosNicNotFoundCount == 0) {
      logger.warn(`Wanos NIC not found, retrying every ${this.config.wanosNicPollInterval / 1000} seconds...`);
      this._logWanosNicNotFoundCount++;
    }
    await delay(this.config.wanosNicPollInterval);
    return await this.pollWanosNic();
  }

  async getWcmIp() {
    if (this.wanosConf.config.WCM) {
      if (this._logWcmIp === 0) {
        this._logWcmIp++;
        logger.info(`Setting WCM IP to statically configure ${this.wanosConf.config.WCM}`);
      }
      return this.wanosConf.config.WCM;
    }
    let dnsLookupPromise = util.promisify(dns.lookup);
    let lookupObject = await dnsLookupPromise(this.config.wcmDomainName, { family: 4 });
    if (this._logWcmIp === 0) {
      this._logWcmIp++;
      logger.debug(`Found WCM address via DNS ${this.config.wcmDomainName}`);
    }
    return lookupObject.address;
  }

  getRegisterRequest(deviceId) {
    let registerRequest = new messages.RegisterRequest();
    registerRequest.setId(deviceId ? deviceId : "");
    registerRequest.setHostname(this.hostname);
    registerRequest.setIp(this.wanosNic.ip4);
    registerRequest.setMac(this.wanosMac);
    registerRequest.setWanosVersion(this.wanosConf.config.VERSION);
    registerRequest.setWanosLicense(this.wanosConf.config.wanosLicense);

    let location = new messages.Location();
    let lng = isNumber(this.wanosConf.config.WCM_AGENT_LOCATION_LONGITUDE) ? Number(this.wanosConf.config.WCM_AGENT_LOCATION_LONGITUDE) : 0;
    let lat = isNumber(this.wanosConf.config.WCM_AGENT_LOCATION_LATITUDE) ? Number(this.wanosConf.config.WCM_AGENT_LOCATION_LATITUDE) : 0;
    location.setLng(lng);
    location.setLat(lat);
    registerRequest.setLoc(location);

    let peers = this.wanosConf.peers.map(x => {
      let peer = new messages.PeerInfo();
      peer.setIp(x.ip);
      peer.setOutput(x.output);
      peer.setHostname(x.hostname);
      peer.setMac(x.mac);
      return peer;
    });
    registerRequest.setPeersList(peers);
    return registerRequest;
  }

  /**
   * @returns {Promise<messages.DeviceStats>}
   */
  async getStats() {
    let [siCpu, siMem, siFs] = await Promise.all([si.currentLoad(), si.mem(), si.fsSize()]);
    let deviceStats = new messages.DeviceStats();
    deviceStats.setCpuLoad(Math.round(siCpu.currentload));
    let cpuList = siCpu.cpus.map(x => {
      let cpuInfo = new messages.CpuInfo();
      cpuInfo.setLoad(Math.round(x.load));
      return cpuInfo;
    });
    deviceStats.setCpusList(cpuList);
    let memInfo = new messages.MemInfo();
    memInfo.setTotal(siMem.total);
    memInfo.setFree(siMem.free);
    memInfo.setUsed(siMem.total - siMem.available);
    deviceStats.setMem(memInfo);
    let fsInfoList = siFs
      .filter(x => {
        return x.type.startsWith("ext");
      })
      .map(x => {
        let fsInfo = new messages.FsInfo();
        fsInfo.setFs(x.fs);
        fsInfo.setType(x.type);
        fsInfo.setSize(x.size);
        fsInfo.setUsed(x.used);
        fsInfo.setUse(Math.round(x.use));
        fsInfo.setMount(x.mount);
        return fsInfo;
      });
    deviceStats.setFsList(fsInfoList);
    let net = new messages.NetworkStats();
    if (this.wanosConf.config.CLICK) {
      let clickController = new ClickController(config.clickIp, config.clickPort);

      try {
        await clickController.connect();
      } catch (err) {
        let rpcError = new ErrMessage();
        rpcError.setCode(ErrorCode.DEVICE_OFFLINE);
        rpcError.setMessage(`Unable to connect to Click: ${err.message}`);
        throw new RpcError(rpcError, err);
      }

      let wanTx = new IntClickReadCommand("wanopout_c", "byte_count");
      let wanRx = new IntClickReadCommand("wanrx_c", "byte_count");
      let commands = [
        clickController.callReadCommand(wanTx),
        clickController.callReadCommand(wanRx)
      ]

      try {
        await Promise.all(commands);
        clickController.disconnect();
      } catch (err) {
        logger.error(`Click Controller Error: ${err.error}`);
        clickController.disconnect();
        let rpcError = new ErrMessage();
        rpcError.setCode(ErrorCode.UNKNOWN);
        rpcError.setMessage(`Click Controller Error: ${err.message}`);
        throw new RpcError(rpcError, err);
      }

      net.setWanRxBps(wanRx.value);
      net.setWanTxBps(wanTx.value);
    } else {
      net.setWanRxBps(0);
      net.setWanTxBps(0);
    }
    deviceStats.setNet(net);
    return deviceStats;
  }

  resetLogOnceCounters() {
    this._logWanosNicNotFoundCount = 0;
    this._logWcmIp = 0;
  }
}

module.exports = {
  DeviceReporter
};