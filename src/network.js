const fs = require("fs");
const util = require("util");
const path = require("path");
const si = require("systeminformation");
const logger = require("./logger");
const messages = require("./grpc/network_pb");
// eslint-disable-next-line no-unused-vars
const reportMessages = require("./grpc/report_pb");
const { readFileLines, isNumber } = require("./helpers");
const { ClickController, BoolClickReadCommand } = require("./click/click-controller");
const { RpcErrorFactory, ErrorCode, RpcError, InvalidArgumentError } = require("./errors");
const { WanosScriptManager } = require("./wanos-script-manager");
const { parseRrdReport, getPeriodString } = require("./rrd");

const readFile = util.promisify(fs.readFile);

const IpProto = {
  TCP: 6,
  UDP: 17
};

// To make all dpi protocols and portobject protocol information available in
// a single list Wanos uses the following standard:
// DPI Protocols - ID < 1000
// Portobject - ID = PORT + 1000
const ApplicationIdRange = {
  TCP_START: 1000,
};

const nfLanFlowDetail = "/wanos/nf/l0/flowdetail";
const nfWanFlowDetail = "/wanos/nf/w0/flowdetail";
const nfLanPorts = "/wanos/nf/l0/ports";
const nfWanPorts = "/wanos/nf/w0/ports";

class NetworkReporter {
  constructor(portObjectsPath, dpiProtocolsPath, wanosPeersFile, wanosConf, clickIp, clickPort, rrdStatsPath) {
    this._portObjectsPath = portObjectsPath;
    this._dpiProtocolsPath = dpiProtocolsPath;
    this._wanosPeersFile = wanosPeersFile;
    this._wanosConf = wanosConf;
    this._clickIp = clickIp;
    this._clickPort = clickPort;
    this._rrdStatsPath = rrdStatsPath;
    this._dpiMap = null;
    this._tcpMap = null;
  }

  /**
   * @returns {Promise<messages.NetworkApplications>} The ID/name pair for each of the supported applications.
   */
  async getApplications() {
    let result = new messages.NetworkApplications();
    let applications = await this._parseApplications();
    result.setApplicationList(applications);
    return result;
  }

  /**
   * @param {messages.NetworkSessionsFilter} filter
   * @returns {Promise<messages.NetworkSessions>}
   */
  async getSessions(filter) {
    let filterObject = filter.toObject();
    let result = await this._parseSessions(filterObject, false);
    return result;
  }

  /**
   * @param {messages.NetworkSessionDetailFilter} filter
   * @returns {Promise<messages.NetworkSessionDetail>}
   */
  async getSessionDetail(filter) {
    let filterObject = filter.toObject();
    let result = await this._parseSessions(filterObject, true);
    return result;
  }

  /**
   * @param {messages.NetworkTopApplicationsFilter} filter
   * @returns {Promise<messages.NetworkTopApplications>}
   */
  async getTopApplications(filter) {
    let filterObject = filter.toObject();
    let result = await this._parseTopApplications(filterObject);
    return result;
  }

  /**
   * @returns {Promise<messages.NetworkPeers>}
   */
  async getPeers() {
    let result = await this._getPeers();
    return result;
  }

  /**
   * @param {messages.NetworkPeerDeleteRequest} request
   * @returns {Promise<messages.NetworkPeerDelete>}
   */
  async deletePeer(peerIp) {
    let result = await this._deletePeer(peerIp);
    return result;
  }

  /**
   * @parm {reportMessages.ReportPeriod} period
   * @returns {Promise<messages.NetworkInterfaceTraffic>}
   */
  async getInterfaceTraffic(period) {
    let result = await this._getInterfaceTraffic(period);
    return result;
  }

  /**
   * @parm {reportMessages.ReportPeriod} period
   * @parm {messages.NetworkQosClassNumber} qosClass
   * @returns {Promise<messages.NetworkQosReport>}
   */
  async getQosReport(period, qosClass) {
    let result = await this._getQosReport(period, qosClass);
    return result;
  }

  /**
   * @parm {reportMessages.ReportPeriod} period
   * @parm {string} [peerIp] - Optional IP address of peer
   * @returns {Promise<messages.NetworkOptimizationLanToWan>}
   */
  async getOptimizationLanToWan(period, peerIp) {
    let result = await this._getOptimizationLanToWan(period, peerIp);
    return result;
  }

  /**
   * @parm {reportMessages.ReportPeriod} period
   * @parm {string} [peerIp] - Optional IP address of peer
   * @returns {Promise<messages.NetworkOptimizationWanToLan>}
   */
  async getOptimizationWanToLan(period, peerIp) {
    let result = await this._getOptimizationWanToLan(period, peerIp);
    return result;
  }

  /**
   * @parm {reportMessages.ReportPeriod} period
   * @returns {Promise<messages.NetworkOptimizationPassThrough>}
   */
  async getOptimizationPassThrough(period) {
    let result = await this._getOptimizationPassThrough(period);
    return result;
  }

  /**
   * @parm {reportMessages.ReportPeriod} period
   * @parm {string} [peerIp] - Optional IP address of peer
   * @returns {Promise<messages.NetworkOptimizationRatios>}
   */
  async getOptimizationRatios(period, peerIp) {
    let result = await this._getOptimizationRatios(period, peerIp);
    return result;
  }

  /**
   * @returns {Promise<messages.NetworkInterfaces>}
   */
  async getNetworkInterfaces() {
    let result = await this._getNetworkInterfaces();
    return result;
  }

  /**
   * @returns {Promise<messages.NetworkInterfaces>}
   */
  async _getNetworkInterfaces() {
    let nicList = [];
    let nics = await si.networkInterfaces();

    for (let nic of nics) {
      if (!/^(lan|wan|eth)/.test(nic.iface)) {
        continue;
      }
      let networkInterface = new messages.NetworkInterface();
      networkInterface.setName(nic.iface);
      networkInterface.setOnline(nic.operstate === "up" ? true : false);
      networkInterface.setMac(nic.mac);
      networkInterface.setDuplex(nic.duplex);
      networkInterface.setSpeed(nic.speed > 0 ? nic.speed : 0);
      networkInterface.setMtu(nic.mtu > 0 ? nic.mtu : 0);
      let driver = await WanosScriptManager.getNicDriver(nic.iface);
      networkInterface.setDriver(driver);

      let stats = await si.networkStats(nic.iface);

      let rxStats = new messages.NetworkInterfaceStats();
      rxStats.setBytes(stats[0].rx_bytes);
      rxStats.setErrors(stats[0].rx_errors);
      rxStats.setDropped(stats[0].rx_dropped);
      networkInterface.setReceive(rxStats);

      let txStats = new messages.NetworkInterfaceStats();
      txStats.setBytes(stats[0].tx_bytes);
      txStats.setErrors(stats[0].tx_errors);
      txStats.setDropped(stats[0].tx_dropped);
      networkInterface.setTransmit(txStats);

      nicList.push(networkInterface);
    }

    let result = new messages.NetworkInterfaces();
    result.setNetworkInterfaceList(nicList);
    return result;
  }

  /**
   * @parm {reportMessages.ReportPeriod} period
   * @parm {string} [peerIp] - Optional IP address of peer
   * @returns {Promise<messages.NetworkOptimizationRatios>}
   */
  async _getOptimizationRatios(period, peerIp) {
    let periodString = getPeriodString(period);
    let type = "total";
    let name = "Total Ratios";
    if (peerIp && peerIp.length > 0) {
      let peers = await this._parsePeersFile();
      let peer = peers.find(x => x.getIp() === peerIp);
      if (!peer) {
        throw new InvalidArgumentError("peer", "Invalid peer.");
      }
      type = `peer${peer.getId()}`;
      name = `${peer.getHostname()} (${peer.getIp()}) Ratios`;
    }
    let jsonReportFile = path.join(this._rrdStatsPath, `${type}-ratio-${periodString}.json`);
    let fileData = await readFile(jsonReportFile, "utf8");
    let rrdReport = JSON.parse(fileData);
    // Ratios rrd json file keeps its values as a fraction, however the frondend expects this to be
    // a percentage. Here we format the values by multiplying it by 100.
    const valueParser = (valueString) => {
      let value = parseFloat(valueString);
      value = isNaN(value) || value === null ? 0 : value;
      if (value < 0) {
        value *= -1;
      }
      return parseInt(value * 100);
    };
    let report = parseRrdReport(rrdReport, name, "percentage", valueParser);
    let result = new messages.NetworkOptimizationRatios();
    result.setReport(report);
    return result;
  }

  /**
   * @parm {reportMessages.ReportPeriod} period
   * @returns {Promise<messages.NetworkOptimizationPassThrough>}
   */
  async _getOptimizationPassThrough(period) {
    let periodString = getPeriodString(period);
    let name = "Total Pass-Through";
    let jsonReportFile = path.join(this._rrdStatsPath, `total-passthrough-${periodString}.json`);
    let fileData = await readFile(jsonReportFile, "utf8");
    let rrdReport = JSON.parse(fileData);
    let report = parseRrdReport(rrdReport, name, "rate");
    let result = new messages.NetworkOptimizationPassThrough();
    result.setReport(report);
    return result;
  }

  /**
   * @parm {reportMessages.ReportPeriod} period
   * @parm {string} [peerIp] - Optional IP address of peer
   * @returns {Promise<messages.NetworkOptimizationWanToLan>}
   */
  async _getOptimizationWanToLan(period, peerIp) {
    let periodString = getPeriodString(period);
    let type = "total";
    let name = "Total Optimized WAN to LAN";
    if (peerIp && peerIp.length > 0) {
      let peers = await this._parsePeersFile();
      let peer = peers.find(x => x.getIp() === peerIp);
      if (!peer) {
        throw new InvalidArgumentError("peer", "Invalid peer.");
      }
      type = `peer${peer.getId()}`;
      name = `${peer.getHostname()} (${peer.getIp()}) WAN to LAN`;
    }
    let jsonReportFile = path.join(this._rrdStatsPath, `${type}-rate-${periodString}.json`);
    let fileData = await readFile(jsonReportFile, "utf8");
    let rrdReport = JSON.parse(fileData);
    let report = parseRrdReport(rrdReport, name, "rate");
    // Filter series list to only include LAN to WAN data. Wanos rrd file includes both LAN to WAN and WAN to LAN data.
    let series = report.getSeriesList().filter(x => x.getName() === "WAN Rx" || x.getName() === "LAN Tx");
    report.setSeriesList(series);

    let result = new messages.NetworkOptimizationWanToLan();
    result.setReport(report);
    return result;
  }

  /**
   * @parm {reportMessages.ReportPeriod} period
   * @parm {string} [peerIp] - Optional IP address of peer
   * @returns {Promise<messages.NetworkOptimizationLanToWan>}
   */
  async _getOptimizationLanToWan(period, peerIp) {
    let periodString = getPeriodString(period);
    let type = "total";
    let name = "Total Optimized LAN to WAN";
    if (peerIp && peerIp.length > 0) {
      let peers = await this._parsePeersFile();
      let peer = peers.find(x => x.getIp() === peerIp);
      if (!peer) {
        throw new InvalidArgumentError("peer", "Invalid peer.");
      }
      type = `peer${peer.getId()}`;
      name = `${peer.getHostname()} (${peer.getIp()}) LAN to WAN`;
    }
    let jsonReportFile = path.join(this._rrdStatsPath, `${type}-rate-${periodString}.json`);
    let fileData = await readFile(jsonReportFile, "utf8");
    let rrdReport = JSON.parse(fileData);
    let report = parseRrdReport(rrdReport, name, "rate");
    // Filter series list to only include LAN to WAN data. Wanos rrd file includes both LAN to WAN and WAN to LAN data.
    let series = report.getSeriesList().filter(x => x.getName() === "LAN Rx" || x.getName() === "WAN Tx");
    report.setSeriesList(series);

    let result = new messages.NetworkOptimizationLanToWan();
    result.setReport(report);
    return result;
  }

  /**
   * @parm {reportMessages.ReportPeriod} period
   * @returns {Promise<messages.NetworkInterfaceTraffic>}
   */
  async _getInterfaceTraffic(period) {
    let periodString = getPeriodString(period);
    let reportList = [];
    // Get report for wan0
    let jsonReportFile = path.join(this._rrdStatsPath, `wan0-${periodString}.json`);
    let fileData = await readFile(jsonReportFile, "utf8");
    let rrdReport = JSON.parse(fileData);
    let report = parseRrdReport(rrdReport, "wan0", "rate");
    reportList.push(report);
    // Get report for lan0
    jsonReportFile = path.join(this._rrdStatsPath, `lan0-${periodString}.json`);
    fileData = await readFile(jsonReportFile, "utf8");
    rrdReport = JSON.parse(fileData);
    report = parseRrdReport(rrdReport, "lan0", "rate");
    reportList.push(report);

    let result = new messages.NetworkInterfaceTraffic();
    result.setReportList(reportList);
    return result;
  }

  /**
   * @parm {reportMessages.ReportPeriod} period
   * @parm {messages.NetworkQosClassNumber} qosClass
   * @returns {Promise<messages.NetworkQosReport>}
   */
  async _getQosReport(period, qosClass) {
    let periodString = getPeriodString(period);
    let reportList = [];
    let reportFiles = [];

    if (qosClass) {
      let filePath = path.join(this._rrdStatsPath, `qosclass${qosClass.getValue()}-tx-${periodString}.json`);
      if (!fs.existsSync(filePath)) {
        let result = new messages.NetworkQosReport();
        result.setReportList(reportList);
        return result;
      }
      reportFiles.push({
        qosClass: qosClass.getValue(),
        path: filePath
      });
    } else {
      for (let i = 0; i <= 17; i++) {
        let filePath = path.join(this._rrdStatsPath, `qosclass${i}-tx-${periodString}.json`)
        if (fs.existsSync(filePath)) {
          reportFiles.push({
            qosClass: i,
            path: filePath
          });
        }
      }
    }

    for (let reportFile of reportFiles) {
      let fileData = await readFile(reportFile.path, "utf8");
      let rrdReport = JSON.parse(fileData);
      let report = parseRrdReport(rrdReport, `QoS Class ${reportFile.qosClass} : WAN Tx`, "rate");
      reportList.push(report);
    }

    let result = new messages.NetworkQosReport();
    result.setReportList(reportList);
    return result;
  }

  /**
   * @param {string} peerIp - Peer IP address
   * @returns {Promise<messages.NetworkPeerDelete>}
   */
  async _deletePeer(peerIp) {
    let peers = await this._parsePeersFile();
    let deletedPeer = null;
    let lines = [];

    for (let peer of peers) {
      if (peer.getIp() === peerIp) {
        deletedPeer = peer;
        continue;
      }
      let line = `${peer.getIp()}, ${peer.getId()}, ${peer.getHostname()}, ${peer.getMac()}\n`;
      lines.push(line);
    }

    if (deletedPeer !== null) {
      let peersData = lines.join("");
      try {
        fs.writeFileSync(this._wanosPeersFile, peersData);
      } catch (err) {
        logger.error(err);
        let unknownError = RpcErrorFactory.GetUnknownError(err);
        throw new RpcError(unknownError, err);
      }
      await WanosScriptManager.makeWanosCfgScriptRemovePeer(deletedPeer.getId());
      WanosScriptManager.makeWanosCfgScriptReconfigure();
    } else {
      let rpcError = new messages.Error();
      rpcError.setCode(ErrorCode.INVALID_ARGUMENT);
      rpcError.setMessage(`Peer ${peerIp} not found.`);
      throw new RpcError(rpcError);
    }

    let result = new messages.NetworkPeerDelete();
    return result;
  }

  /**
   * @returns {Promise<messages.NetworkPeers>}
   */
  async _getPeers() {
    let v5 = this._wanosConf.config.VERSION.startsWith("5.");
    let clickController = new ClickController(this._clickIp, this._clickPort);
    let peers = await this._parsePeersFile();

    try {
      await clickController.connect();
    } catch (err) {
      let rpcError = new messages.Error();
      rpcError.setCode(ErrorCode.DEVICE_OFFLINE);
      rpcError.setMessage(`Unable to connect to Click: ${err.message}`);
      throw new RpcError(rpcError, err);
    }

    for (let peer of peers) {
      // $data = `/tce/etc/wanos/wanos-stats 2h peer$_ peerlanrx peer$_ peerwantx`;
      let peerId = peer.getId();
      // Calculate Wan TX reduction
      let txStats = await WanosScriptManager.wanosStatsScript2hPeerTxStats(peerId);
      // eslint-disable-next-line no-unused-vars
      let [txCode, lanRxString, wanTxString] = txStats.split(" ");
      let lanRx = parseFloat(lanRxString);
      let wanTx = parseFloat(wanTxString);
      let ratio = 0;
      if (lanRx > 0 && wanTx > 0) {
        ratio = Math.round(((lanRx - wanTx) / lanRx) * 100);
        if (ratio < 0) {
          ratio = 0;
        }
      }
      peer.setReductionTx(ratio);

      //Calculate Wan RX reduction
      let rxStats = await WanosScriptManager.wanosStatsScript2hPeerRxStats(peerId);
      // eslint-disable-next-line no-unused-vars
      let [rxCode, lanTxString, wanRxString] = rxStats.split(" ");
      let lanTx = parseFloat(lanTxString);
      let wanRx = parseFloat(wanRxString);
      ratio = 0;
      if (lanTx > 0 && wanRx > 0) {
        ratio = Math.round(((lanTx - wanRx) / lanTx) * 100);
        if (ratio < 0) {
          ratio = 0;
        }
      }
      peer.setReductionRx(ratio);

      let val = "";
      try {
        let peerBypass = new BoolClickReadCommand(`bypass${peerId}`, "active");
        await clickController.callReadCommand(peerBypass);
        val = peerBypass.value === true ? "Idle" : "Active";
      } catch (err) {
        logger.error(`Click Controller Error: ${err.error}`);
        val = "Unknown";
      }
      peer.setStatus(val);

      try {
        let dsReadyElement = v5 ? `dedup${peerId}_1` : `dedup${peerId}`;
        let dsReady = new BoolClickReadCommand(dsReadyElement, "ds_ready");
        await clickController.callReadCommand(dsReady);
        val = dsReady.value === true ? "Ready" : "Loading";
      } catch (err) {
        logger.error(`Click Controller Error: ${err.error}`);
        val = "Unknown";
      }
      peer.setDatastore(val);

      try {
        let plrElement = v5 ? `peer_info${peerId}` : `comp${peerId}`;
        let plrHandler = v5 ? "comp_state" : "active_method";
        let plr = await clickController.callReadHandler(plrElement, plrHandler);
        val = plr.value;
      } catch (err) {
        logger.error(`Click Controller Error: ${err.error}`);
        val = "Unknown";
      }
      peer.setPlr(val);
    }

    clickController.disconnect();
    let result = new messages.NetworkPeers();
    result.setPeerList(peers);
    return result;
  }

  /**
   * @returns {messages.NetworkPeer[]}
   */
  async _parsePeersFile() {
    let peers = [];
    let lines = await readFileLines(this._wanosPeersFile);
    for (let line of lines) {
      if (line.trim() === "") {
        continue;
      }
      let [ip, id, hostname, mac] = line.split(",").map(x => x.trim());
      let peer = new messages.NetworkPeer();
      peer.setId(parseInt(id));
      peer.setIp(ip);
      peer.setHostname(hostname);
      peer.setMac(mac);
      peers.push(peer);
    }
    return peers;
  }

  /**
   * @param {messages.NetworkTopApplicationsFilter.AsObject} filter
   * @returns {Promise<messages.NetworkTopApplications>}
   */
  async _parseTopApplications(filter) {
    // TODO implement caching
    // Generate the netflow data ports files.
    await this._runFlowsScript(filter, "ports");
    let lanMap = await this._parsePortsFile(nfLanPorts);
    let wanMap = await this._parsePortsFile(nfWanPorts);
    let applicationList = [];

    for (let [key, lanApplication] of lanMap) {
      let wanApplication = wanMap.get(key);
      if (!wanApplication) {
        continue;
      }
      let application = new messages.NetworkTopApplication();
      application.setApplication(lanApplication.application);
      application.setBytesLan(lanApplication.bytes);
      application.setBytesWan(wanApplication.bytes);
      application.setPercentageLan(lanApplication.percentage);
      application.setPercentageWan(wanApplication.percentage);
      let reduction = Math.round(100 - (wanApplication.bytes / lanApplication.bytes * 100));
      if (reduction < 0) {
        reduction = 0;
      }
      application.setReduction(reduction);
      applicationList.push(application);
    }

    // Sort in descending order by lan percentage
    applicationList.sort((a, b) => b.getPercentageLan() - a.getPercentageLan());

    applicationList = applicationList.slice(0, filter.top);

    let result = new messages.NetworkTopApplications();
    result.setApplicationList(applicationList);
    return result;
  }

  async _parsePortsFile(portsFilePath) {
    let dpiMap = await this._getDpiMap();
    let tcpMap = await this._getTcpMap();
    let map = new Map();

    let lines = await readFileLines(portsFilePath);
    // Remove the header and 5 trailing summary lines
    lines = lines.slice(1, lines.length - 5);
    for (let line of lines) {
      let parts = line.split(",");
      let dpiProt = Number(parts[4]);
      let name = "";
      if (dpiProt < 1000) {
        let dpiApp = dpiMap.get(dpiProt);
        name = dpiApp ? dpiApp.getName() : "";
      } else {
        let lowPort = dpiProt - 1000;
        let tcpApp = tcpMap.get(lowPort);
        name = tcpApp ? tcpApp.getName() : `TCP ${lowPort}`;
      }
      let bytes = Number(parts[9]);
      let percentage = Number(parts[10]);

      let application = {
        application: name,
        bytes: bytes,
        percentage: percentage.toFixed(1)
      };
      map.set(dpiProt, application);
    }
    return map;
  }

  /**
   * @param {(messages.NetworkSessionsFilter.AsObject|messages.NetworkSessionDetailFilter.AsObject)} filter
   * @param {boolean} detailFilter - Is filter a NetworkSessionDetailFilter
   * @returns {(Promise<messages.NetworkSessions>|Promise<messages.NetworkSessionDetail>)}
   */
  async _parseSessions(filter, detailFilter = false) {
    // TODO implement caching
    // Generate the netflow data files, only if it is a full sessions request.
    // For SessionDetail we re-use the already generated flowdetail files.
    if (!detailFilter) {
      await this._runFlowsScript(filter, "flows");
    }

    let sessions = await this._parseLanSessions(filter, detailFilter);
    sessions = await this._setWanSessionData(sessions);
    // Convert to array for sorting and pagination
    let sessionList = Array.from(sessions.values());

    // Order by field
    let sortFieldGetter = () => {};
    switch (filter.orderBy) {
      case messages.NetworkOrderByEnum.REDUCTION:
        sortFieldGetter = (x) => x.getReduction();
        break;
      case messages.NetworkOrderByEnum.SOURCE:
        sortFieldGetter = (x) => x.getSource();
        break;
      case messages.NetworkOrderByEnum.DESTINATION:
        sortFieldGetter = (x) => x.getDestination();
        break;
      case messages.NetworkOrderByEnum.BYTES_LAN:
        sortFieldGetter = (x) => x.getBytesLan();
        break;
      case messages.NetworkOrderByEnum.BYTES_WAN:
        sortFieldGetter = (x) => x.getBytesWan();
        break;
      case messages.NetworkOrderByEnum.APPLICATION: {
        let dpiMap = await this._getDpiMap();
        sortFieldGetter = (x) => {
          let appId = x.getAppId();
          if (appId) {
            let app = dpiMap.get(appId);
            if (app) {
              return app.getName();
            }
          }
          return "";
        };
        break;
      }
      case messages.NetworkOrderByEnum.TIME:
        sortFieldGetter = (x) => new Date(x.getTime());
        break;
      default:
        sortFieldGetter = (x) => x.getReduction();
        break;
    }

    // Order direction
    switch (filter.sort) {
      case messages.NetworkSortDirectionEnum.ASCENDING:
        //sessionList.sort((a, b) => sortFieldGetter(a) - sortFieldGetter(b));
        sessionList.sort((a, b) => {
          if (sortFieldGetter(a) < sortFieldGetter(b)) {
            return -1;
          }
          if (sortFieldGetter(a) > sortFieldGetter(b)) {
            return 1;
          }
          return 0;
        });
        break;
      case messages.NetworkSortDirectionEnum.DESCENDING:
      default:
        //sessionList.sort((a, b) => sortFieldGetter(b) - sortFieldGetter(a));
        sessionList.sort((a, b) => {
          if (sortFieldGetter(b) < sortFieldGetter(a)) {
            return -1;
          }
          if (sortFieldGetter(b) > sortFieldGetter(a)) {
            return 1;
          }
          return 0;
        });
        break;
    }

    let totalItems = sessionList.length;
    let start = (filter.page - 1) * filter.limit;
    let end = start + filter.limit;
    sessionList = sessionList.slice(start, end);

    let result = null;

    if (detailFilter) {
      result = new messages.NetworkSessionDetail();
    } else {
      result = new messages.NetworkSessions();
    }
    result.setTotalItems(totalItems);
    result.setSessionList(sessionList);

    return result;
  }

  /**
   * Complete the sessions map by setting bytesWan and calculating reduction.
   * @param {Map<string, messages.NetworkSession>} lanSessions
   * @returns {Promise<Map<string, messages.NetworkSession>>}
   */
  async _setWanSessionData(lanSessions) {
    let lines = await readFileLines(nfWanFlowDetail);
    // Remove the header and 4 trailing summary lines
    lines = lines.slice(1, lines.length - 4);
    for (let line of lines) {
      let [srcString,
        srcPortString,
        dstString,
        dstPortString,
        bytesString,
        protoString] = line.trim().split(/\s+/);

      let key = `${srcString}:${srcPortString}-${dstString}:${dstPortString}-${protoString}`;
      let session = lanSessions.get(key);
      if (!session) {
        continue;
      }
      session.setBytesWan(parseInt(bytesString));
      let reduction = Math.round(100 - (session.getBytesWan() / session.getBytesLan() * 100));
      if (reduction < 0) {
        reduction = 0;
      }
      session.setReduction(reduction);
    }
    return lanSessions;
  }

  /**
   * @param {(messages.NetworkSessionsFilter.AsObject|messages.NetworkSessionDetailFilter.AsObject)} filter
   * @param {boolean} detailFilter - Is filter a NetworkSessionDetailFilter
   * @returns {Promise<Map<string, messages.NetworkSession>>}
   */
  async _parseLanSessions(filter, detailFilter) {
    let sessions = new Map();
    let lines = await readFileLines(nfLanFlowDetail);
    // Remove the header and 4 trailing summary lines
    lines = lines.slice(1, lines.length - 4);
    for (let line of lines) {
      let [srcString,
        srcPortString,
        dstString,
        dstPortString,
        bytesString,
        protoString,
        dateString,
        timeString,
        dpiMasterString,
        dpiProtString] = line.trim().split(/\s+/);
      let sourcePort = parseInt(srcPortString);
      let destinationPort = parseInt(dstPortString);
      let bytes = parseInt(bytesString);
      let dpiMaster = parseInt(dpiMasterString);
      let dpiProt = parseInt(dpiProtString);

      if (detailFilter) {
        if (
          (
            (filter.source === srcString && filter.destination === dstString) ||
            (filter.source === dstString && filter.destination === srcString)
          ) === false) {
          continue;
        }
      } else {
        if (
          (
            (bytes > filter.minBytes) &&
            (filter.application === 0 || (dpiMaster === filter.application || dpiProt === filter.application)) &&
            (filter.port === 0 || (sourcePort === filter.port || destinationPort === filter.port))
          ) === false) {
          continue;
        }
      }

      let session = new messages.NetworkSession();
      session.setSource(srcString);
      session.setSourcePort(sourcePort);
      session.setDestination(dstString);
      session.setDestinationPort(destinationPort);
      session.setBytesLan(bytes);
      let protocol = parseInt(protoString) === IpProto.TCP ? "tcp" : "udp";
      session.setProtocol(protocol);
      if (dpiMaster > 0 && dpiMaster < ApplicationIdRange.TCP_START) {
        session.setAppId(dpiMaster);
      } else if (dpiProt > 0 && dpiProt < ApplicationIdRange.TCP_START) {
        session.setAppId(dpiProt);
      } else {
        session.setAppId(0);
      }
      let time = new Date(`${dateString} ${timeString}`);
      session.setTime(time.toISOString());

      let key = `${srcString}:${srcPortString}-${dstString}:${dstPortString}-${protoString}`;
      sessions.set(key, session);
    }
    return sessions;
  }

  /**
   * Run the wanos script that generates the nfdump output.
   * @param {(messages.NetworkSessionsFilter.AsObject|messages.NetworkTopApplicationsFilter.AsObject)} filter
   * @param {string} type = "flows|ports"
   */
  async _runFlowsScript(filter, type) {
    // system( "sudo -u tc /tce/etc/wanos/flows $time flows $peervalue $direction" );
    // system( "sudo -u tc /tce/etc/wanos/flows $time ports $peervalue" );
    let peer = filter.peer === "" ? "any" : filter.peer;
    let options = `${filter.period} ${type} ${peer}`;
    if (type === "flows") {
      let direction = "ANY";
      if (filter.direction === messages.NetworkDirectionEnum.WAN_IN) {
        direction = "IN";
      } else if (filter.direction === messages.NetworkDirectionEnum.WAN_OUT) {
        direction = "OUT";
      }
      options = `${options} ${direction}`;
    }

    await WanosScriptManager.flowsScript(options);
  }

  async _parseApplications() {
    let dpiMap = await this._getDpiMap();
    return Array.from(dpiMap.values());
  }

  async _getDpiMap() {
    if (this._dpiMap !== null) {
      return this._dpiMap;
    }
    this._dpiMap = new Map();
    let lines = await readFileLines(this._dpiProtocolsPath);
    for (let line of lines) {
      let parts = line.split(",").map(x => x.trim());
      if (parts.length !== 2 || !isNumber(parts[0])) {
        logger.warn(`Invalid line in ${this._dpiProtocolsPath}: ${line}`);
        continue;
      }
      let id = Number(parts[0]);
      let application = new messages.NetworkApplication();
      application.setId(id);
      application.setName(parts[1]);
      this._dpiMap.set(id, application);
    }
    return this._dpiMap;
  }

  async _getTcpMap() {
    if (this._tcpMap !== null) {
      return this._tcpMap;
    }
    this._tcpMap = new Map();
    let lines = await readFileLines(this._portObjectsPath);
    for (let line of lines) {
      let parts = line.split(",").map(x => x.trim());
      if (parts.length !== 3) {
        logger.warn(`Invalid line in ${this._portObjectsPath}: ${line}`);
        continue;
      }
      let [port, ipProto] = parts[0].split("/").map(x => Number(x));
      if (!isNumber(port) || !isNumber(ipProto)) {
        logger.warn(`Invalid line in ${this._portObjectsPath}: ${line}`);
        continue;
      }
      if (ipProto !== IpProto.TCP) {
        continue;
      }
      let application = new messages.NetworkApplication();
      application.setId(port);
      application.setName(parts[1]);
      this._tcpMap.set(port, application);
    }
    return this._tcpMap;
  }
}

class NetworkRpcController {

  constructor(setupRpcCall, handleError, portObjectsPath, dpiProtocolsPath, wanosPeersFile, wanosConf, clickIp, clickPort, rrdStatsPath) {
    this.setupRpcCall = setupRpcCall;
    this.handleError = handleError;
    this.networkReporter = new NetworkReporter(portObjectsPath, dpiProtocolsPath, wanosPeersFile, wanosConf, clickIp, clickPort, rrdStatsPath);
  }

  rpcGetNetworkApplications() {
    const handleRequest = async () => {
      try {
        return await this.networkReporter.getApplications();
      } catch (error) {
        return this.handleError(error, new messages.NetworkApplications());
      }
    };
    this.setupRpcCall("getNetworkApplications", handleRequest);
  }

  rpcGetNetworkSessions() {
    const handleRequest = async (request) => {
      try {
        return await this.networkReporter.getSessions(request.getFilter());
      } catch (error) {
        return this.handleError(error, new messages.NetworkSessions());
      }
    };
    this.setupRpcCall("getNetworkSessions", handleRequest);
  }

  rpcGetNetworkSessionDetail() {
    const handleRequest = async (request) => {
      try {
        return await this.networkReporter.getSessionDetail(request.getFilter());
      } catch (error) {
        return this.handleError(error, new messages.NetworkSessionDetail());
      }
    };
    this.setupRpcCall("getNetworkSessionDetail", handleRequest);
  }

  rpcGetNetworkTopApplications() {
    const handleRequest = async (request) => {
      try {
        return await this.networkReporter.getTopApplications(request.getFilter());
      } catch (error) {
        return this.handleError(error, new messages.NetworkTopApplications());
      }
    };
    this.setupRpcCall("getNetworkTopApplications", handleRequest);
  }

  rpcGetNetworkPeers() {
    const handleRequest = async () => {
      try {
        return await this.networkReporter.getPeers();
      } catch (error) {
        return this.handleError(error, new messages.NetworkPeers());
      }
    };
    this.setupRpcCall("getNetworkPeers", handleRequest);
  }

  rpcDeleteNetworkPeer() {
    const handleRequest = async (request) => {
      try {
        return await this.networkReporter.deletePeer(request.getPeerIp());
      } catch (error) {
        return this.handleError(error, new messages.NetworkPeerDelete());
      }
    };
    this.setupRpcCall("deleteNetworkPeer", handleRequest);
  }

  rpcGetNetworkInterfaceTraffic() {
    const handleRequest = async (request) => {
      try {
        return await this.networkReporter.getInterfaceTraffic(request.getPeriod());
      } catch (error) {
        return this.handleError(error, new messages.NetworkInterfaceTraffic());
      }
    };
    this.setupRpcCall("getNetworkInterfaceTraffic", handleRequest);
  }

  rpcGetNetworkOptimizationLanToWan() {
    const handleRequest = async (request) => {
      try {
        return await this.networkReporter.getOptimizationLanToWan(request.getPeriod(), request.getPeerIp());
      } catch (error) {
        return this.handleError(error, new messages.NetworkOptimizationLanToWan());
      }
    };
    this.setupRpcCall("getNetworkOptimizationLanToWan", handleRequest);
  }

  rpcGetNetworkOptimizationWanToLan() {
    const handleRequest = async (request) => {
      try {
        return await this.networkReporter.getOptimizationWanToLan(request.getPeriod(), request.getPeerIp());
      } catch (error) {
        return this.handleError(error, new messages.NetworkOptimizationWanToLan());
      }
    };
    this.setupRpcCall("getNetworkOptimizationWanToLan", handleRequest);
  }

  rpcGetNetworkOptimizationPassThrough() {
    const handleRequest = async (request) => {
      try {
        return await this.networkReporter.getOptimizationPassThrough(request.getPeriod());
      } catch (error) {
        return this.handleError(error, new messages.NetworkOptimizationPassThrough());
      }
    };
    this.setupRpcCall("getNetworkOptimizationPassThrough", handleRequest);
  }

  rpcGetNetworkOptimizationRatios() {
    const handleRequest = async (request) => {
      try {
        return await this.networkReporter.getOptimizationRatios(request.getPeriod(), request.getPeerIp());
      } catch (error) {
        return this.handleError(error, new messages.NetworkOptimizationRatios());
      }
    };
    this.setupRpcCall("getNetworkOptimizationRatios", handleRequest);
  }

  rpcGetNetworkQosReport() {
    const handleRequest = async (request) => {
      try {
        return await this.networkReporter.getQosReport(request.getPeriod(), request.getQosClass());
      } catch (error) {
        return this.handleError(error, new messages.NetworkQosReport());
      }
    };
    this.setupRpcCall("getNetworkQosReport", handleRequest);
  }

  rpcGetNetworkInterfaces() {
    const handleRequest = async () => {
      try {
        return await this.networkReporter.getNetworkInterfaces();
      } catch (error) {
        return this.handleError(error, new messages.NetworkInterfaces());
      }
    };
    this.setupRpcCall("getNetworkInterfaces", handleRequest);
  }

  setupRpc() {
    this.rpcGetNetworkApplications();
    this.rpcGetNetworkSessions();
    this.rpcGetNetworkSessionDetail();
    this.rpcGetNetworkTopApplications();
    this.rpcGetNetworkPeers();
    this.rpcDeleteNetworkPeer();
    this.rpcGetNetworkInterfaceTraffic();
    this.rpcGetNetworkOptimizationLanToWan();
    this.rpcGetNetworkOptimizationWanToLan();
    this.rpcGetNetworkOptimizationPassThrough();
    this.rpcGetNetworkOptimizationRatios();
    this.rpcGetNetworkQosReport();
    this.rpcGetNetworkInterfaces();
  }
}

// (async () => {
//   const WanosConf = require("./wanos-conf");
//   let wanosConf = new WanosConf("/etc/wanos/wanos.conf", "/etc/wanos/peers");
//   await wanosConf.loadConfig();
//   let reporter = new NetworkReporter("/etc/wanos/portobjects", "/etc/wanos/dpi.protocols", "/etc/wanos/peers", wanosConf, "10.1.10.131", 13000, "/var/www/stats");
//   try {
//     let result = await reporter.getNetworkInterfaces();
//     console.log(JSON.stringify(result.toObject()));
//   } catch (err) {
//     console.log(err);
//     logger.error(err);
//   }
// })();

module.exports.NetworkRpcController = NetworkRpcController;