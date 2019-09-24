const fs = require("fs");
const si = require("systeminformation");
const messages = require("./grpc/diagnostic_pb");
const { ClickController } = require("./click/click-controller");
const { WanosScriptManager } = require("./wanos-script-manager");
const { readFileLines } = require("./helpers");
const logger = require("./logger");

const BenchmarkCompletedMarker = "Dedup-Hot";
const BenchmarkStatus = {
  NONE: "none",
  SCHEDULED: "scheduled",
  COMPLETE: "complete"
};

class DiagnosticReporter {
  constructor(wanosConf, wanosLogFile, logEntries, staticRoutesFile, clickIp, clickPort, benchmarkFile, reconfigureFile) {
    this._wanosConf = wanosConf;
    this._wanosLogFile = wanosLogFile;
    this._logEntries = logEntries;
    this._staticRoutesFile = staticRoutesFile;
    this._clickIp = clickIp;
    this._clickPort = clickPort;
    this._benchmarkFile = benchmarkFile;
    this._reconfigureFile = reconfigureFile;
  }

  /**
   * @parm {messages.DiagnosticLogLevelEnum} level
   * @returns {Promise<messages.DiagnosticLog>}
   */
  async getLog(level) {
    let result = await this._getLog(level);
    return result;
  }

  /**
   * @returns {Promise<messages.DiagnosticHealth>}
   */
  async getHealth() {
    let result = await this._getHealth();
    return result;
  }

  /**
   * @returns {Promise<messages.DiagnosticBenchmark>}
   */
  async getBenchmark() {
    let result = await this._getBenchmark();
    return result;
  }

  /**
   * @returns {Promise<messages.DiagnosticBenchmark>}
   */
  async scheduleBenchmark() {
    let result = await this._scheduleBenchmark();
    return result;
  }

  /**
   * @returns {Promise<messages.DiagnosticNetstat>}
   */
  async getNetstat() {
    let result = await this._getNetstat();
    return result;
  }

  /**
   * @parm {messages.DiagnosticPingOptions} pingOptions
   * @returns {Promise<messages.DiagnosticPing>}
   */
  async getPing(pingOptions) {
    let result = await this._getPing(pingOptions);
    return result;
  }

  /**
   * @parm {messages.DiagnosticTracerouteOptions} pingOptions
   * @returns {Promise<messages.DiagnosticTraceroute>}
   */
  async getTraceroute(tracerouteOptions) {
    let result = await this._getTraceroute(tracerouteOptions);
    return result;
  }

  /**
   * @parm {messages.DiagnosticTracerouteOptions} pingOptions
   * @returns {Promise<messages.DiagnosticTraceroute>}
   */
  async _getTraceroute(tracerouteOptions) {
    let options = tracerouteOptions.toObject();
    let lines = await WanosScriptManager.getTraceroute(options.hostIp, options.hops, options.ipv6, options.icmp, options.lookup);
    let result = new messages.DiagnosticTraceroute();
    result.setLineList(lines);
    return result;
  }

  /**
   * @parm {messages.DiagnosticPingOptions} pingOptions
   * @returns {Promise<messages.DiagnosticPing>}
   */
  async _getPing(pingOptions) {
    let lines = await WanosScriptManager.getPing(pingOptions.getHostIp(), pingOptions.getIpv6(), pingOptions.getCount());
    let result = new messages.DiagnosticPing();
    result.setLineList(lines);
    return result;
  }

  /**
   * @returns {Promise<messages.DiagnosticNetstat>}
   */
  async _getNetstat() {
    let sessionList = [];
    let sessionLines = await WanosScriptManager.getNetstat();
    for (let line of sessionLines) {
      if (!line.startsWith("tcp ") || line.includes("0.0.0.0") || line.includes("127.0.0.1")) {
        continue;
      }
      // eslint-disable-next-line no-unused-vars
      let [proto, rxQ, txQ, address1, address2, state] = line.split(" ").filter(x => x.length > 0);
      let session = new messages.DiagnosticNetstatItem();
      session.setAddress1(address1);
      session.setAddress2(address2);
      session.setStatus(state);
      sessionList.push(session);
    }

    let report = new messages.DiagnosticNetstatReport();
    report.setSessionList(sessionList);
    report.setTotalItems(sessionList.length);

    let result = new messages.DiagnosticNetstat();
    result.setReport(report);
    return result;
  }

  /**
   * @returns {Promise<messages.DiagnosticBenchmark>}
   */
  async _scheduleBenchmark() {
    // Only schedule if benchmark is not already running.
    if (fs.existsSync(this._benchmarkFile)) {
      let lastLine = await WanosScriptManager.getTail(this._benchmarkFile, 1);
      lastLine = lastLine.filter(x => x.length > 0);
      if (lastLine.length == 1 && lastLine[0].startsWith(BenchmarkCompletedMarker)) {
        // Schedule
        WanosScriptManager.scheduleBenchmark();
      }
    } else {
      // Schedule
      WanosScriptManager.scheduleBenchmark();
    }
    let report = new messages.DiagnosticBenchmarkReport();
    report.setStatus(BenchmarkStatus.SCHEDULED);
    let result = new messages.DiagnosticBenchmark();
    result.setReport(report);
    return result;
  }

  /**
   * @returns {Promise<messages.DiagnosticBenchmark>}
   */
  async _getBenchmark() {

    let report = new messages.DiagnosticBenchmarkReport();

    if (fs.existsSync(this._benchmarkFile)) {
      let lastLine = await WanosScriptManager.getTail(this._benchmarkFile, 1);
      lastLine = lastLine.filter(x => x.length > 0);
      if (lastLine.length == 1 && lastLine[0].startsWith(BenchmarkCompletedMarker)) {
        let lines = await readFileLines(this._benchmarkFile);
        let stat = fs.statSync(this._benchmarkFile);
        report.setReportTime(stat.mtime.toISOString());
        report.setStatus(BenchmarkStatus.COMPLETE);
        report.setLineList(lines);
      } else {
        report.setStatus(BenchmarkStatus.SCHEDULED);
      }
    } else {
      report.setStatus(BenchmarkStatus.NONE);
    }

    let result = new messages.DiagnosticBenchmark();
    result.setReport(report);
    return result;
  }

  /**
   * @returns {Promise<messages.DiagnosticHealth>}
   */
  async _getHealth() {
    let itemList = [];

    const setOk = (item) => {
      item.setStatus("Ok");
      item.setColor("success");
    };
    const setFail = (item) => {
      item.setStatus("Fail");
      item.setColor("error");
    };
    const setNo = (item) => {
      item.setStatus("No");
      item.setColor("warning");
    };
    const setLow = (item) => {
      item.setStatus("Low");
      item.setColor("warning");
    };

    let dsDiskSize = await WanosScriptManager.getDsDriveSizeGB();
    let peerCount = this._wanosConf.peers.length;
    let diskRequired = peerCount * this._wanosConf.config.DS_SIZE / 1000;
    if (this._wanosConf.config.HTTP_CACHE_REDIRECT) {
      diskRequired += 10;
    }
    let item = new messages.DiagnosticHealthItem();
    item.setName("Diskspace");
    if (diskRequired >= dsDiskSize) {
      setFail(item);
    } else {
      setOk(item);
    }
    itemList.push(item);

    let dsMem = (this._wanosConf.config.DS_SIZE / 16) * 1000;
    let sysMem = await si.mem();
    let totalMem = sysMem.total / 1000;
    let memRequired = peerCount * dsMem;
    if (this._wanosConf.config.HTTP_CACHE_REDIRECT) {
      let cacheMem = this._wanosConf.config.HTTP_CACHE_MEM * 1000;
      memRequired += cacheMem;
    }
    item = new messages.DiagnosticHealthItem();
    item.setName("Memory");
    if (memRequired >= totalMem) {
      setFail(item);
    } else {
      setOk(item);
    }
    itemList.push(item);

    let cpuInfo = await si.cpu();
    let cores = cpuInfo.cores;
    item = new messages.DiagnosticHealthItem();
    item.setName("CPU");
    if (cores <= 1) {
      setLow(item);
    } else {
      setOk(item);
    }
    itemList.push(item);


    item = new messages.DiagnosticHealthItem();
    item.setName("Link Duplex");
    let nics = await si.networkInterfaces();
    let filter = this._wanosConf.config.DEPLOYMENT_MODE === "tunnel" ? /^wan/ : /^(lan|wan)/;
    let shouldFail = nics
      .filter(x => filter.test(x.iface))
      .some(x => x.duplex !== "full");
    if (shouldFail) {
      setFail(item);
    } else {
      setOk(item);
    }
    itemList.push(item);

    item = new messages.DiagnosticHealthItem();
    item.setName("Link Errors");
    let nicStats = await si.networkStats("wan0,lan0");
    let linkErrors = nicStats.some(x => x.rx_errors >= 100);
    if (linkErrors) {
      setFail(item);
    } else {
      setOk(item);
    }
    itemList.push(item);

    item = new messages.DiagnosticHealthItem();
    item.setName("Link Drops");
    let dropErrors = nicStats.some(x => x.rx_dropped >= 100);
    if (dropErrors) {
      setFail(item);
    } else {
      setOk(item);
    }
    itemList.push(item);

    item = new messages.DiagnosticHealthItem();
    item.setName("NetFlow");
    let processes = await si.processes();
    let netflowError = processes.list.filter(x => x.name === "nfcapd").length !== 2;
    if (netflowError) {
      setFail(item);
    } else {
      setOk(item);
    }
    itemList.push(item);

    item = new messages.DiagnosticHealthItem();
    item.setName("SNMP");
    if (!this._wanosConf.config.SNMPD) {
      item.setStatus("---");
      item.setColor("success");
    } else {
      let snmpError = !processes.list.some(x => x.name === "snmpd");
      if (snmpError) {
        setFail(item);
      } else {
        setOk(item);
      }
    }
    itemList.push(item);

    item = new messages.DiagnosticHealthItem();
    item.setName("TCP-X");
    if (!this._wanosConf.config.PEP_TCP_ACCELERATOR) {
      item.setStatus("---");
      item.setColor("success");
    } else {
      let tcpxError = !processes.list.some(x => x.name === "w_tcpx");
      if (tcpxError) {
        setFail(item);
      } else {
        setOk(item);
      }
    }
    itemList.push(item);

    item = new messages.DiagnosticHealthItem();
    item.setName("Webcache");
    if (!this._wanosConf.config.HTTP_CACHE_REDIRECT) {
      item.setStatus("---");
      item.setColor("success");
    } else {
      let squidError = !processes.list.some(x => x.name === "squid");
      if (squidError) {
        setFail(item);
      } else {
        setOk(item);
      }
    }
    itemList.push(item);

    item = new messages.DiagnosticHealthItem();
    item.setName("Watchdog");
    let wanosdError = !processes.list.some(x => x.command.includes("wanosd"));
    if (wanosdError) {
      setFail(item);
    } else {
      setOk(item);
    }
    itemList.push(item);

    let staticRoutes = await readFileLines(this._staticRoutesFile);
    let gateways = [];
    for (let route of staticRoutes) {
      // eslint-disable-next-line no-unused-vars
      let [subnet, gateway] = route.split(" ");
      gateways.push(gateway.trim());
    }
    if (this._wanosConf.config.GW) {
      gateways.push(this._wanosConf.config.GW);
    }

    let clickController = new ClickController(this._clickIp, this._clickPort);
    let arpTable = [];
    let swTable = [];
    try {
      await clickController.connect();
      let arpTableData = await clickController.callReadHandler("arptable", "table");
      let swTableData = await clickController.callReadHandler("sw", "table");
      arpTable = arpTableData.data.split("\n");
      swTable = swTableData.data.split("\n");
    } catch (err) {
      logger.error(err);
    }
    clickController.disconnect();
    let gwFound = false;
    for (let gw of gateways) {
      for (let arpEntry of arpTable) {
        let [arpIp, , arpMac] = arpEntry.split(" ");
        if (gw === arpIp) {
          for (let swEntry of swTable) {
            let [swMac, swPort] = swEntry.split(" ");
            if (arpMac !== swMac) {
              continue;
            }
            if (swPort === "1") {
              gwFound = true;
            }
            break;
          }
        }
        if (gwFound) {
          break;
        }
      }
      if (gwFound) {
        break;
      }
    }
    item = new messages.DiagnosticHealthItem();
    item.setName("Wan Gateway");
    if (gwFound || this._wanosConf.config.DEPLOYMENT_MODE !== "bridge") {
      setOk(item);
    } else {
      setFail(item);
    }
    itemList.push(item);

    item = new messages.DiagnosticHealthItem();
    item.setName("Global Wan Tx Rate");
    if (this._wanosConf.config.SIM === 0) {
      setNo(item);
    } else {
      setOk(item);
    }
    itemList.push(item);

    item = new messages.DiagnosticHealthItem();
    item.setName("Configs Applied");
    let shouldReconfigure = await this._shouldReconfigure();
    if (shouldReconfigure) {
      setNo(item);
    } else {
      setOk(item);
    }
    itemList.push(item);

    item = new messages.DiagnosticHealthItem();
    item.setName("Password Changed");
    let dateSeconds = await WanosScriptManager.getDateSeconds();
    if (this._wanosConf.config.CHPASSWD) {
      dateSeconds -= this._wanosConf.config.CHPASSWD;
    }
    if (!this._wanosConf.config.CHPASSWD || (dateSeconds > 7776000)) {
      setNo(item);
    } else {
      setOk(item);
    }
    itemList.push(item);

    let result = new messages.DiagnosticHealth();
    result.setItemList(itemList);
    return result;
  }

  async _shouldReconfigure() {
    if (fs.existsSync(this._reconfigureFile)) {
      let lines = await readFileLines(this._reconfigureFile);
      if (lines.length > 0 && lines[0].trim() === "1") {
        return true;
      }
    }
    return false;
  }

  /**
   * @parm {messages.DiagnosticLogLevelEnum} level
   * @returns {Promise<messages.DiagnosticLog>}
   */
  async _getLog(level) {
    let includeString = "Debug|Info|Routine|Warn|Alert|Error";
    switch (level) {
      case messages.DiagnosticLogLevelEnum.DEBUG: {
        includeString = "Debug|Info|Routine|Warn|Alert|Error";
        break;
      }
      case messages.DiagnosticLogLevelEnum.INFO: {
        includeString = "Info|Routine|Warn|Alert|Error";
        break;
      }
      case messages.DiagnosticLogLevelEnum.WARN: {
        includeString = "Warn|Alert|Error";
        break;
      }
      case messages.DiagnosticLogLevelEnum.ERROR: {
        includeString = "Error";
        break;
      }
      default:
        includeString = "Info|Routine|Warn|Alert|Error";
        break;
    }
    let log = await WanosScriptManager.getTailWithRegex(this._wanosLogFile, includeString, this._logEntries);

    let result = new messages.DiagnosticLog();
    result.setLogList(log);
    return result;
  }

  // Use this function if we rather want to use an exclude regex pattern instead of the include pattern above
  //
  // /**
  //  * @parm {messages.DiagnosticLogLevelEnum} level
  //  * @returns {Promise<messages.DiagnosticLog>}
  //  */
  // async _getLog(level) {
  //   let excludeString = "";
  //   switch (level) {
  //     case messages.DiagnosticLogLevelEnum.DEBUG: {
  //       excludeString = "";
  //       break;
  //     }
  //     case messages.DiagnosticLogLevelEnum.INFO: {
  //       excludeString = "Debug";
  //       break;
  //     }
  //     case messages.DiagnosticLogLevelEnum.WARN: {
  //       excludeString = "Debug|Info";
  //       break;
  //     }
  //     case messages.DiagnosticLogLevelEnum.ERROR: {
  //       excludeString = "Debug|Info|Warn";
  //       break;
  //     }
  //     default:
  //       excludeString = "Debug";
  //       break;
  //   }
  //   let pattern = excludeString.length > 0 ? `^((?!(${excludeString})).)*$` : "";
  //   let log = await WanosScriptManager.getTailWithRegex(this._wanosLogFile, pattern, this._logEntries);

  //   let result = new messages.DiagnosticLog();
  //   result.setLogList(log);
  //   return result;
  // }

}

class DiagnosticRpcController {

  constructor(setupRpcCall, handleError, wanosConf, wanosLogFile, logEntries, staticRoutesFile, clickIp, clickPort, benchmarkFile, reconfigureFile) {
    this.setupRpcCall = setupRpcCall;
    this.handleError = handleError;
    this.diagnosticReporter = new DiagnosticReporter(wanosConf, wanosLogFile, logEntries, staticRoutesFile, clickIp, clickPort, benchmarkFile, reconfigureFile);
  }

  rpcGetDiagnosticLog() {
    const handleRequest = async (request) => {
      try {
        return await this.diagnosticReporter.getLog(request.getLevel());
      } catch (error) {
        return this.handleError(error, new messages.DiagnosticLog());
      }
    };
    this.setupRpcCall("getDiagnosticLog", handleRequest);
  }

  rpcGetDiagnosticHealth() {
    const handleRequest = async () => {
      try {
        return await this.diagnosticReporter.getHealth();
      } catch (error) {
        return this.handleError(error, new messages.DiagnosticHealth());
      }
    };
    this.setupRpcCall("getDiagnosticHealth", handleRequest);
  }

  rpcGetDiagnosticBenchmark() {
    const handleRequest = async () => {
      try {
        return await this.diagnosticReporter.getBenchmark();
      } catch (error) {
        return this.handleError(error, new messages.DiagnosticBenchmark());
      }
    };
    this.setupRpcCall("getDiagnosticBenchmark", handleRequest);
  }

  rpcScheduleDiagnosticBenchmark() {
    const handleRequest = async () => {
      try {
        return await this.diagnosticReporter.scheduleBenchmark();
      } catch (error) {
        return this.handleError(error, new messages.DiagnosticBenchmark());
      }
    };
    this.setupRpcCall("scheduleDiagnosticBenchmark", handleRequest);
  }

  rpcGetDiagnosticNetstat() {
    const handleRequest = async () => {
      try {
        return await this.diagnosticReporter.getNetstat();
      } catch (error) {
        return this.handleError(error, new messages.DiagnosticNetstat());
      }
    };
    this.setupRpcCall("getDiagnosticNetstat", handleRequest);
  }

  rpcGetDiagnosticPing() {
    const handleRequest = async (request) => {
      try {
        return await this.diagnosticReporter.getPing(request.getPingOptions());
      } catch (error) {
        return this.handleError(error, new messages.DiagnosticPing());
      }
    };
    this.setupRpcCall("getDiagnosticPing", handleRequest);
  }

  rpcGetDiagnosticTraceroute() {
    const handleRequest = async (request) => {
      try {
        return await this.diagnosticReporter.getTraceroute(request.getTracerouteOptions());
      } catch (error) {
        return this.handleError(error, new messages.DiagnosticTraceroute());
      }
    };
    this.setupRpcCall("getDiagnosticTraceroute", handleRequest);
  }

  setupRpc() {
    this.rpcGetDiagnosticLog();
    this.rpcGetDiagnosticHealth();
    this.rpcGetDiagnosticBenchmark();
    this.rpcScheduleDiagnosticBenchmark();
    this.rpcGetDiagnosticNetstat();
    this.rpcGetDiagnosticPing();
    this.rpcGetDiagnosticTraceroute();
  }
}

// (async () => {
//   const WanosConf = require("./wanos-conf");
//   let wanosConf = new WanosConf("/etc/wanos/wanos.conf", "/etc/wanos/peers");
//   await wanosConf.loadConfig();
//   let reporter = new DiagnosticReporter(wanosConf, "/wanos/wanos.log", 20, "/etc/wanos/static_routes", "127.0.0.1", 13000, "/wanos/bench.log");
//   try {
//     let options = new messages.DiagnosticTracerouteOptions();
//     options.setHostIp("10.1.10.1");
//     options.setHops(10);
//     options.setIpv6(false);
//     options.setIcmp(true);
//     options.setLookup(true);
//     let result = await reporter.getTraceroute(options);
//     console.log(JSON.stringify(result.toObject()));
//   } catch (err) {
//     console.log(err);
//   }
// })();

module.exports = {
  DiagnosticRpcController
};