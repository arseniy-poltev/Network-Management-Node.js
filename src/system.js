const fs = require("fs");
const util = require("util");
const path = require("path");
const si = require("systeminformation");
const messages = require("./grpc/system_pb");
// eslint-disable-next-line no-unused-vars
const reportMessages = require("./grpc/report_pb");
const { parseRrdReport, getPeriodString } = require("./rrd");
const { WanosScriptManager } = require("./wanos-script-manager");
const { readFileLines } = require("./helpers");

const readFile = util.promisify(fs.readFile);

class SystemReporter {
  constructor(rrdStatsPath, wanosConf) {
    this._rrdStatsPath = rrdStatsPath;
    this._wanosConf = wanosConf;
  }

  /**
   * @parm {reportMessages.ReportPeriod} period
   * @returns {Promise<messages.SystemMemory>}
   */
  async getMemory(period) {
    let result = await this._getMemory(period);
    return result;
  }

  /**
   * @parm {reportMessages.ReportPeriod} period
   * @returns {Promise<messages.SystemLoad>}
   */
  async getLoad(period) {
    let result = await this._getLoad(period);
    return result;
  }

  /**
   * @parm {reportMessages.ReportPeriod} period
   * @returns {Promise<messages.SystemCpu>}
   */
  async getCpu(period) {
    let result = await this._getCpu(period);
    return result;
  }

  /**
   * @parm {reportMessages.ReportPeriod} period
   * @returns {Promise<messages.SystemDiskLoad>}
   */
  async getDiskLoad(period) {
    let result = await this._getDiskLoad(period);
    return result;
  }

  /**
   * @parm {reportMessages.ReportPeriod} period
   * @returns {Promise<messages.SystemDiskSpace>}
   */
  async getDiskSpace(period) {
    let result = await this._getDiskSpace(period);
    return result;
  }

  /**
   * @returns {Promise<messages.SystemInfo>}
   */
  async getInfo() {
    let result = await this._getInfo();
    return result;
  }

  /**
   * @returns {Promise<messages.SystemIndicators>}
   */
  async getIndicators() {
    let result = await this._getIndicators();
    return result;
  }

  /**
   * @returns {Promise<messages.SystemIndicators>}
   */
  async _getIndicators() {
    let indicators = new messages.SystemIndicatorsData();

    let load = await WanosScriptManager.getLoad();
    indicators.setLoad(load);

    let cpu = await si.currentLoad();
    indicators.setCpu(Math.floor(cpu.currentload));

    let mem = await si.mem();
    indicators.setMemory(Math.floor((mem.total - mem.available) / mem.total * 100));
    

    let disk = await WanosScriptManager.getDsDriveUsedPercentage();
    indicators.setDisk(disk);

    let peerCount = this._wanosConf.peers.length > 0 ? this._wanosConf.peers.length : 1;
    let dsConfSize = parseInt(this._wanosConf.config.DS_SIZE) * 1024 * 1024;
    let dsUsedBytes = await WanosScriptManager.getDsUsedBytes();
    let datastore = Math.floor((dsUsedBytes / (peerCount * dsConfSize)) * 100);
    indicators.setDatastore(datastore);

    let result = new messages.SystemIndicators();
    result.setIndicators(indicators);
    return result;
  }

  /**
   * @returns {Promise<messages.SystemInfo>}
   */
  async _getInfo() {
    let info = new messages.SystemInfoData();
    info.setVersion(`${this._wanosConf.config.VERSION} ${this._wanosConf.config.wanosLicense}`);
    let cpus = await si.cpu();
    info.setThreads(cpus.cores);
    let datastoreDrive = await WanosScriptManager.getDsDrive();
    info.setDatastore(datastoreDrive);
    let mem = await si.mem();
    info.setMemoryBytes(mem.total);
    let savedBytes = await WanosScriptManager.getSavedBytes();
    info.setSavedBytes(savedBytes);
    info.setSwapBytes(mem.swapused);
    let uptimeData = await readFileLines("/proc/uptime");
    let uptimeSeconds = uptimeData.length > 0 ? parseInt(uptimeData[0].split(" ")[0] / 60) : 0;
    info.setUptime(uptimeSeconds);
    let platform = await WanosScriptManager.getPlatform();
    info.setPlatform(platform);

    let result = new messages.SystemInfo();
    result.setInfo(info);
    return result;
  }

  /**
   * @parm {reportMessages.ReportPeriod} period
   * @returns {Promise<messages.SystemDiskSpace>}
   */
  async _getDiskSpace(period) {
    let periodString = getPeriodString(period);
    let name = "Disk Space Utilization";
    let jsonReportFile = path.join(this._rrdStatsPath, `diskusage-${periodString}.json`);
    let fileData = await readFile(jsonReportFile, "utf8");
    let rrdReport = JSON.parse(fileData);
    let report = parseRrdReport(rrdReport, name, "bytes");
    let result = new messages.SystemDiskSpace();
    result.setReport(report);
    return result;
  }

  /**
   * @parm {reportMessages.ReportPeriod} period
   * @returns {Promise<messages.SystemDiskLoad>}
   */
  async _getDiskLoad(period) {
    let periodString = getPeriodString(period);
    let name = "Disk Input/Output";
    let jsonReportFile = path.join(this._rrdStatsPath, `diskio-${periodString}.json`);
    let fileData = await readFile(jsonReportFile, "utf8");
    let rrdReport = JSON.parse(fileData);
    let report = parseRrdReport(rrdReport, name, "percentage");
    let result = new messages.SystemDiskLoad();
    result.setReport(report);
    return result;
  }

  /**
   * @parm {reportMessages.ReportPeriod} period
   * @returns {Promise<messages.SystemCpu>}
   */
  async _getCpu(period) {
    let periodString = getPeriodString(period);
    let name = "CPU Utilization";
    let jsonReportFile = path.join(this._rrdStatsPath, `cpu-${periodString}.json`);
    let fileData = await readFile(jsonReportFile, "utf8");
    let rrdReport = JSON.parse(fileData);
    let report = parseRrdReport(rrdReport, name, "percentage");
    let result = new messages.SystemCpu();
    result.setReport(report);
    return result;
  }

  /**
   * @parm {reportMessages.ReportPeriod} period
   * @returns {Promise<messages.SystemLoad>}
   */
  async _getLoad(period) {
    let periodString = getPeriodString(period);
    let name = "System Load";
    let jsonReportFile = path.join(this._rrdStatsPath, `load-${periodString}.json`);
    let fileData = await readFile(jsonReportFile, "utf8");
    let rrdReport = JSON.parse(fileData);
    let report = parseRrdReport(rrdReport, name, "percentage");
    let result = new messages.SystemLoad();
    result.setReport(report);
    return result;
  }

  /**
   * @parm {reportMessages.ReportPeriod} period
   * @returns {Promise<messages.SystemMemory>}
   */
  async _getMemory(period) {
    let periodString = getPeriodString(period);
    let name = "Memory Utilization";
    let jsonReportFile = path.join(this._rrdStatsPath, `memory-${periodString}.json`);
    let fileData = await readFile(jsonReportFile, "utf8");
    let rrdReport = JSON.parse(fileData);
    let report = parseRrdReport(rrdReport, name, "bytes");
    let result = new messages.SystemMemory();
    result.setReport(report);
    return result;
  }
}

class SystemRpcController {

  constructor(setupRpcCall, handleError, rrdStatsPath, wanosConf) {
    this.setupRpcCall = setupRpcCall;
    this.handleError = handleError;
    this.systemReporter = new SystemReporter(rrdStatsPath, wanosConf);
  }

  rpcGetSystemMemory() {
    const handleRequest = async (request) => {
      try {
        return await this.systemReporter.getMemory(request.getPeriod());
      } catch (error) {
        return this.handleError(error, new messages.SystemMemory());
      }
    };
    this.setupRpcCall("getSystemMemory", handleRequest);
  }

  rpcGetSystemLoad() {
    const handleRequest = async (request) => {
      try {
        return await this.systemReporter.getLoad(request.getPeriod());
      } catch (error) {
        return this.handleError(error, new messages.SystemLoad());
      }
    };
    this.setupRpcCall("getSystemLoad", handleRequest);
  }

  rpcGetSystemCpu() {
    const handleRequest = async (request) => {
      try {
        return await this.systemReporter.getCpu(request.getPeriod());
      } catch (error) {
        return this.handleError(error, new messages.SystemCpu());
      }
    };
    this.setupRpcCall("getSystemCpu", handleRequest);
  }

  rpcGetSystemDiskLoad() {
    const handleRequest = async (request) => {
      try {
        return await this.systemReporter.getDiskLoad(request.getPeriod());
      } catch (error) {
        return this.handleError(error, new messages.SystemDiskLoad());
      }
    };
    this.setupRpcCall("getSystemDiskLoad", handleRequest);
  }

  rpcGetSystemDiskSpace() {
    const handleRequest = async (request) => {
      try {
        return await this.systemReporter.getDiskSpace(request.getPeriod());
      } catch (error) {
        return this.handleError(error, new messages.SystemDiskSpace());
      }
    };
    this.setupRpcCall("getSystemDiskSpace", handleRequest);
  }

  rpcGetSystemInfo() {
    const handleRequest = async () => {
      try {
        return await this.systemReporter.getInfo();
      } catch (error) {
        return this.handleError(error, new messages.SystemInfo());
      }
    };
    this.setupRpcCall("getSystemInfo", handleRequest);
  }

  rpcGetSystemIndicators() {
    const handleRequest = async () => {
      try {
        return await this.systemReporter.getIndicators();
      } catch (error) {
        return this.handleError(error, new messages.SystemIndicators());
      }
    };
    this.setupRpcCall("getSystemIndicators", handleRequest);
  }

  setupRpc() {
    this.rpcGetSystemMemory();
    this.rpcGetSystemLoad();
    this.rpcGetSystemCpu();
    this.rpcGetSystemDiskLoad();
    this.rpcGetSystemDiskSpace();
    this.rpcGetSystemInfo();
    this.rpcGetSystemIndicators();
  }
}

// (async () => {
//   const WanosConf = require("./wanos-conf");
//   let wanosConf = new WanosConf("/wanos/wanos.conf", "/wanos/peers");
//   await wanosConf.loadConfig();
//   await wanosConf.loadPeers();
//   let reporter = new SystemReporter("/wanos/stats/", wanosConf);
//   try {
//     let result = await reporter.getIndicators();
//     console.log(JSON.stringify(result.toObject()));
//   } catch (err) {
//     logger.error(err);
//   }
// })();

module.exports = {
  SystemRpcController
};