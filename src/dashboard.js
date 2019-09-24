const { ClickController, IntClickReadCommand } = require("./click/click-controller");
const { ProtocolReporter } = require("./protocol-reporter");
const messages = require("./grpc/dashboard_pb");
const { ErrorCode, RpcError } = require("./errors");
const logger = require("./logger");

class DashboardReporter {
  constructor(wanosConf, clickIp, clickPort) {
    this.wanosConf = wanosConf;
    this.clickIp = clickIp;
    this.clickPort = clickPort;
  }

  /**
   * @param {messages.DashboardDataRequest} request
   * @returns {Promise<messages.DashboardData>}
   */
  async geData(request) {
    let dataReport = new messages.DashboardData();
    dataReport.setTs(Math.floor(Date.now() / 1000));

    let clickController = new ClickController(this.clickIp, this.clickPort);

    try {
      await clickController.connect();
    } catch (err) {
      let rpcError = new messages.Error();
      rpcError.setCode(ErrorCode.DEVICE_OFFLINE);
      rpcError.setMessage(`Unable to connect to Click: ${err.message}`);
      throw new RpcError(rpcError, err);
    }

    let opWanTx;
    let opLanRx;
    let opWanRx;
    let opLanTx;
    let bpWanRxOrLoss;
    let bpWanTxOrRtt;

    if (!request.getHasPeerOutput()) {
      opWanTx = new IntClickReadCommand("wanopout_c", "byte_count");
      opLanRx = new IntClickReadCommand("optable", "byte_count");
      opWanRx = new IntClickReadCommand("wanrx_c", "byte_count");
      opLanTx = new IntClickReadCommand("lantx_c", "byte_count");
      bpWanRxOrLoss = new IntClickReadCommand("pass_through_rx", "byte_count");
      bpWanTxOrRtt = new IntClickReadCommand("checkout", "byte_count");
    } else {
      let peerOutput = request.getPeerOutput();
      opWanTx = new IntClickReadCommand(`peer_wan_tx_c${peerOutput}`, "byte_count");
      opLanRx = new IntClickReadCommand(`peer_lan_rx_c${peerOutput}`, "byte_count");
      opWanRx = new IntClickReadCommand(`peer_wan_rx_c${peerOutput}`, "byte_count");
      opLanTx = new IntClickReadCommand(`peer_lan_tx_c${peerOutput}`, "byte_count");
      if (parseInt(this.wanosConf.config.VERSION) < 5) {
        bpWanRxOrLoss = new IntClickReadCommand(`rsp_peer${peerOutput}`, "tx_retransmit_count");
        bpWanTxOrRtt = new IntClickReadCommand(`wrtt_peer${peerOutput}`, "wrtt");
      } else {
        bpWanRxOrLoss = new IntClickReadCommand(`peer_info${peerOutput}`, "rsp_total_retransmits");
        bpWanTxOrRtt = new IntClickReadCommand(`peer_info${peerOutput}`, "peer_rtt");
      }
    }

    let commands = [
      clickController.callReadCommand(opWanTx),
      clickController.callReadCommand(opLanRx),
      clickController.callReadCommand(opWanRx),
      clickController.callReadCommand(opLanTx),
      clickController.callReadCommand(bpWanRxOrLoss),
      clickController.callReadCommand(bpWanTxOrRtt)
    ];

    try {
      await Promise.all(commands);
    } catch (err) {
      logger.error(`Click Controller Error: ${err.error}`);
      let rpcError = new messages.Error();
      rpcError.setCode(ErrorCode.UNKNOWN);
      rpcError.setMessage(`Click Controller Error: ${err.message}`);
      throw new RpcError(rpcError, err);
    }

    // Disconnect the Click socket
    clickController.disconnect();

    dataReport.setOpWanTxBytes(opWanTx.value);
    dataReport.setOpLanRxBytes(opLanRx.value);
    dataReport.setOpWanRxBytes(opWanRx.value);
    dataReport.setOpLanTxBytes(opLanTx.value);
    if (!request.getHasPeerOutput()) {
      dataReport.setBpWanRxBytes(bpWanRxOrLoss.value);
      dataReport.setBpWanTxBytes(bpWanTxOrRtt.value);
    } else {
      dataReport.setLoss(bpWanRxOrLoss.value);
      dataReport.setRtt(bpWanTxOrRtt.value);
    }
    return dataReport;
  }

  /**
   * @param {messages.DashboardTopPortsRequest} request
   * @returns {Promise<messages.DashboardTopPorts>}
   */
  async getTopPorts(request) {
    let protocolReporter = new ProtocolReporter();
    let peerOutput = request.getHasPeerOutput() ? request.getPeerOutput() : null;
    let protocols = await protocolReporter.getTopPorts(request.getTimeSpanSeconds(), request.getTopN(), peerOutput);

    let protocolList = protocols.map(x => {
      let protocolInfo = new messages.ProtocolInfo();
      protocolInfo.setLabel(x.label);
      protocolInfo.setLanBytes(x.lanBytes);
      protocolInfo.setWanBytes(x.wanBytes);
      protocolInfo.setPercentage(x.percentage);
      protocolInfo.setPort(x.port);
      return protocolInfo;
    });

    let topPortsReport = new messages.DashboardTopPorts();
    topPortsReport.setProtocolList(protocolList);
    return topPortsReport;
  }
}

class DashboardRpcController {
  constructor(setupRpcCall, handleError, wanosConf, clickIp, clickPort) {
    this.setupRpcCall = setupRpcCall;
    this.handleError = handleError;
    this.dashboardReporter = new DashboardReporter(wanosConf, clickIp, clickPort);
  }

  setupRpc() {
    this.rpcGetDashboardData();
    this.rpcGetDashboardTopPorts();
  }

  rpcGetDashboardData() {
    const handleRequest = async (request) => {
      try {
        return await this.dashboardReporter.geData(request);
      } catch (error) {
        return this.handleError(error, new messages.DashboardData());
      }
    };
    this.setupRpcCall("getDashboardData", handleRequest);
  }

  rpcGetDashboardTopPorts() {
    const handleRequest = async (request) => {
      try {
        return await this.dashboardReporter.getTopPorts(request);
      } catch (error) {
        return this.handleError(error, new messages.DashboardTopPorts());
      }
    };
    this.setupRpcCall("getDashboardTopPorts", handleRequest);
  }
}

module.exports = {
  DashboardRpcController
};