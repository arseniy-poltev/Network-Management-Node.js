const fs = require("fs");
const config = require("./config");
const messages = require("./grpc/status_pb");
const { WanosScriptManager } = require("./wanos-script-manager");
const { readFileLines } = require("./helpers");

class StatusReporter {
  constructor(handleError, statusInterval, reconfigureFile) {
    this._handleError = handleError;
    this._statusInterval = statusInterval;
    this._rpcCall = null;
    this._statusIntervalTimeout = null;
    this._reconfigureFile = reconfigureFile;
  }

  setupRpc(rpcCall) {
    this._rpcCall = rpcCall;
    this._statusIntervalTimeout = setInterval(() => this.sendStatusUpdate(), this._statusInterval);
  }

  cleanup() {
    if (this._statusIntervalTimeout) {
      clearInterval(this._statusIntervalTimeout);
      this._statusIntervalTimeout = null;
    }
    this._rpcCall = null;
  }

  /**
   * @returns {Promise<messages.StatusUpdate>}
   */
  async getStatusUpdate() {
    let result = await this._getStatusUpdate();
    return result;
  }

  async sendStatusUpdate() {
    try {
      let result = await this._getStatusUpdate();
      this._rpcCall.write(result);
    } catch (error) {
      return this._handleError(error, new messages.StatusUpdate());
    }
  }

  /**
   * @returns {Promise<messages.StatusUpdate>}
   */
  async _getStatusUpdate() {
    let reconfigure = await this._shouldReconfigure();
    let alert = new messages.Alert();
    let logLines = await WanosScriptManager.getTailWithRegex(config.wanosLogFile, "] : Error :", 1);
    if (logLines.length > 0) {
      const ErrorLineRegex = /^\[([A-Za-z]{3} [A-Za-z]{3}[\s]+[\d]+ [\d]{2}:[\d]{2}:[\d]{2} [\d]{4})\] : Error :/;
      let matches = logLines[0].match(ErrorLineRegex);
      if (matches) {
        let errorAt = new Date(matches[1]);
        alert.setLastErrorAt(errorAt.getTime());
      }
    }
    alert.setReconfigure(reconfigure);
    let result = new messages.StatusUpdate();
    result.setAlert(alert);
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
}

class StatusRpcController {

  constructor(setupRpcCall, handleError, statusInterval, reconfigureFile) {
    this.setupRpcCall = setupRpcCall;
    this.handleError = handleError;
    this.statusReporter = new StatusReporter(handleError, statusInterval, reconfigureFile);
    this.rpcCall = null;
  }

  rpcGetStatusUpdate() {
    const handleRequest = async () => {
      try {
        return await this.statusReporter.getStatusUpdate();
      } catch (error) {
        return this.handleError(error, new messages.StatusUpdate());
      }
    };
    this.rpcCall = this.setupRpcCall("getStatusUpdate", handleRequest);
  }

  setupRpc() {
    this.rpcGetStatusUpdate();
    this.statusReporter.setupRpc(this.rpcCall);
  }

  cleanup() {
    this.statusReporter.cleanup();
    this.rpcCall = null;
  }
}

// (async () => {
//   let reporter = new StatusReporter(() => {}, 2000, "/etc/wanos/reconfigure");
//   try {
//     let result = await reporter.getStatusUpdate();
//     console.log(JSON.stringify(result.toObject()));
//   } catch (err) {
//     console.log(err);
//     console.log(err.rpcError.toObject());
//   }
// })();

module.exports = {
  StatusRpcController
};