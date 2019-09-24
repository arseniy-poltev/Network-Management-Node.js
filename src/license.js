const fs = require('fs');
const config = require('./config');
const {readFileLines, writeFileLines} = require('./helpers');
const messages = require("./grpc/license_pb");
const { ErrorCode, RpcError } = require("./errors");
const { WanosScriptManager } = require("./wanos-script-manager");

const TOKEN_FILE_PATH = '/tmp/wanos_prelicense.pre';
const WANOS_LICENSE_PATH = '/tce/etc/wanos.lic';

class LicenseManager {
  constructor(wanosConf) {
  	this.wanosConf = wanosConf;
  }

  async getLicense() {
  	let response = new messages.LicenseResponse();
  	let license = new messages.License();

  	const licenseInfo = await this._parseLicenseInfo();
  	const token = fs.readFileSync(TOKEN_FILE_PATH, 'utf8').trim();

    license.setVersion(this.wanosConf.config.VERSION);
    license.setActive(this.wanosConf.config.wanosLicense);
  	license.setStatus(licenseInfo.STATUS);
  	license.setExpire(licenseInfo.EXPIRE);
  	license.setToken(token);

  	response.setLicense(license);
  	
  	return response;
  }

  async AddLicense(license, token) {
  	const localToken = fs.readFileSync(TOKEN_FILE_PATH, 'utf8').trim();

  	if (localToken !== token.trim()) {
  		let rpcError = new messages.Error();
      rpcError.setCode(ErrorCode.INVALID_ARGUMENT);
      rpcError.setMessage(`Invalid token`);
      throw new RpcError(rpcError);
  	}

  	if (!license || license.length !== 172) {
  		let rpcError = new messages.Error();
      rpcError.setCode(ErrorCode.INVALID_ARGUMENT);
      rpcError.setMessage(`Invalid license`);
      throw new RpcError(rpcError);
  	}

  	try {
      await writeFileLines(WANOS_LICENSE_PATH, [license]);
	  	await WanosScriptManager.registerLicense();
  	} catch (e) {
  		let rpcError = new messages.Error();
      rpcError.setCode(ErrorCode.INVALID_ARGUMENT);
      rpcError.setMessage(`Invalid license`);
      throw new RpcError(rpcError);
  	}

    await this.wanosConf._getWanosVersion();
  	this._setReconfigureFile();

  	return this.getLicense();
  }

  async _setReconfigureFile() {
    await writeFileLines(config.reconfigureFile, ["1"]);
  }

  async _parseLicenseInfo() {
  	let licenseInfo = {};
  	let lines = await readFileLines(config.wanosLicenseFile);
  	for (let line of lines) {
  		let [key, value] = line.split('=');
  		if (!key || !value) continue;
  		licenseInfo[key.trim()] = value.trim();
  	}

  	return licenseInfo;
  }
}

class LicenseRpcController {
  constructor(setupRpcCall, handleError, wanosConf) {
    this.setupRpcCall = setupRpcCall;
    this.handleError = handleError;
    this.licenseManager = new LicenseManager(wanosConf);
  }

  async rpcGetLicense() {
    const handleRequest = async () => {
      try {
        return await this.licenseManager.getLicense();
      } catch (error) {
        return this.handleError(error, new messages.LicenseResponse());
      }
    };
    this.setupRpcCall("getLicense", handleRequest);
	}

	async rpcAddLicense() {
    const handleRequest = async (req) => {
      try {
        return await this.licenseManager.AddLicense(req.getLicense(), req.getToken());
      } catch (error) {
        return this.handleError(error, new messages.LicenseResponse());
      }
    };
    this.setupRpcCall("addLicense", handleRequest);
	}

  setupRpc() {
  	this.rpcGetLicense();
  	this.rpcAddLicense();
  }
}

module.exports = {
  LicenseRpcController
};
