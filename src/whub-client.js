const fs = require("fs");
const grpc = require("grpc");
const services = require("./grpc/wanos_hub_grpc_pb");
const config = require("./config");
const { DeviceReporter } = require("./device");
const { DashboardRpcController } = require("./dashboard");
const { WebcacheRpcController } = require("./webcache");
const { NetworkRpcController } = require("./network");
const { SystemRpcController } = require("./system");
const { DiagnosticRpcController } = require("./diagnostic");
const { ConfigureRpcController } = require("./configure");
const { StatusRpcController } = require("./status");
const { LicenseRpcController } = require("./license");
const { Patcher } = require("./patcher");
const { MaintenanceRpcController } = require("./maintenance");
const { delay } = require("./helpers");
const { RpcErrorFactory, RpcError } = require("./errors");
const logger = require("./logger");

// Variables
let wcmConfig = { id: "" };
let rpcClient = null;
let logConnectFailedCount = 0;

const deviceReporter = new DeviceReporter(config);
const dashboardRpcController = new DashboardRpcController(setupRpcCall, handleError, deviceReporter.wanosConf, config.clickIp, config.clickPort);
const webcacheRpcController = new WebcacheRpcController(setupRpcCall, handleError, config.webcachePath);
const networkRpcController = new NetworkRpcController(
  setupRpcCall,
  handleError,
  config.portObjectsPath,
  config.dpiProtocolsPath,
  config.wanosPeersFile,
  deviceReporter.wanosConf,
  config.clickIp,
  config.clickPort,
  config.rrdStatsPath
);
const systemRpcController = new SystemRpcController(setupRpcCall, handleError, config.rrdStatsPath, deviceReporter.wanosConf);
const diagnosticRpcController = new DiagnosticRpcController(
  setupRpcCall, handleError,
  deviceReporter.wanosConf,
  config.wanosLogFile,
  config.logEntries,
  config.staticRoutesFile,
  config.clickIp,
  config.clickPort,
  config.benchmarkFile,
  config.reconfigureFile);
const configureRpcController = new ConfigureRpcController(setupRpcCall, handleError, deviceReporter.wanosConf);
const statusRpcController = new StatusRpcController(setupRpcCall, handleError, config.statusInterval, config.reconfigureFile);
const maintenanceRpcController = new MaintenanceRpcController(setupRpcCall, handleError, config, deviceReporter.wanosConf);
const licenseRpcController = new LicenseRpcController(setupRpcCall, handleError, deviceReporter.wanosConf);

function setupRpcCall(callName, handleRequest) {
  let metadata = new grpc.Metadata();
  metadata.set("id", wcmConfig.id);
  let call = rpcClient[callName](metadata);
  call.rpcClient = rpcClient;

  call.on("data", async (request) => {
    let result = await handleRequest(request);
    result.setRequestId(request.getRequestId());
    call.write(result);
  });

  call.on("end", () => {
    logger.debug(`End on ${callName} channel.`);
    call.end();
  });

  call.on("error", (err) => {
    logger.debug(`Error on ${callName} channel.`);
    handleRpcCallError(err, call);
  });

  return call;
}

function handleRpcCallError(err, call) {
  if (call.rpcClient && call.rpcClient.restarting !== true) {
    call.rpcClient.restarting = true;
    call.rpcClient = null;
    restart(err);
  }
}

function cleanup() {
  deviceReporter.cleanup();
  statusRpcController.cleanup();
  maintenanceRpcController.cleanup();
  if (rpcClient) {
    rpcClient.close();
    rpcClient = null;
  }
}

async function restart(err) {
  if (err) {
    if (!err.code || err.code !== 14 || (err.code === 14 && logConnectFailedCount === 0)) {
      if (err.code && err.code === 14) {
        logConnectFailedCount++;
      }
      logger.error(err);
      logger.info(`An error occurred, restarting in ${config.restartDelay / 1000} seconds`);
    }
  }
  cleanup();
  await delay(config.restartDelay);
  await main();
}

function rpcRegister() {
  return new Promise((resolve, reject) => {
    wcmConfig = { id: "" };
    try {
      wcmConfig = JSON.parse(fs.readFileSync(config.wcmConfigFile));
    } catch (err) {
      // If the file doesn't exist we'll just create it,
      // otherwise reject with error.
      if (err.code !== "ENOENT") {
        return reject(err);
      }
    }

    let registerRequest = deviceReporter.getRegisterRequest(wcmConfig.id);

    rpcClient.register(registerRequest, function(err, response) {
      if (err) {
        return reject(err);
      }
      logConnectFailedCount = 0;
      let registerResponse = response.toObject();
      logger.info("Registered to WCM.");
      deviceReporter.resetLogOnceCounters();
      // Update local ID if different from server
      if (wcmConfig.id !== registerResponse.id) {
        wcmConfig.id = registerResponse.id;
        fs.writeFileSync(config.wcmConfigFile, JSON.stringify(wcmConfig));
      }
      wcmConfig.orgId = registerResponse.orgId;
      return resolve(registerResponse);
    });
  });
}

function rpcDeviceStatsReport() {
  let metadata = new grpc.Metadata();
  metadata.set("id", wcmConfig.id);
  let call = rpcClient.deviceStatsReport(metadata);
  call.rpcClient = rpcClient;
  call.on("data", async () => {
    let deviceStats = await deviceReporter.getStats();
    call.write(deviceStats);
  });
  call.on("end", () => {
    call.end();
  });
  call.on("error", (err) => {
    logger.warn("Error on device stats report channel.");
    handleRpcCallError(err, call);
  });
}

function rpcUpdatePeers() {
  let metadata = new grpc.Metadata();
  metadata.set("id", wcmConfig.id);
  let call = rpcClient.updatePeers(metadata);
  call.rpcClient = rpcClient;
  call.on("data", async () => {});
  call.on("end", () => {
    call.end();
  });
  call.on("error", (err) => {
    logger.warn("Error on update peers channel.");
    handleRpcCallError(err, call);
  });

  const handlePeersUpdate = (peersReport) => {
    call.write(peersReport);
  };
  // Watch the peers file for any changes and send update to server in case the file changed
  deviceReporter.on("peersUpdate", handlePeersUpdate);
  deviceReporter.on("cleanup", () => {
    deviceReporter.off("peersUpdate", handlePeersUpdate);
  });
}

function handleError(error, result) {
  let rpcError = null;
  if (error instanceof RpcError) {
    rpcError = error.rpcError;
  } else {
    rpcError = RpcErrorFactory.GetUnknownError(error);
  }
  result.setError(rpcError);
  return result;
}

async function startRpcClient() {
  let wcmIp = await deviceReporter.getWcmIp();
  rpcClient = new services.WHubClient(
    `${wcmIp}:${config.rpcPort}`,
    grpc.credentials.createInsecure(), {
      "grpc.keepalive_time_ms": 10000,
      "grpc.keepalive_timeout_ms": 10000,
      "rpc.keepalive_permit_without_calls": 1,
      "grpc.http2.max_pings_without_data": 0,
      "grpc.http2.min_ping_interval_without_data_ms": 5000,
      "grpc.http2.min_time_between_pings_ms": 10000
    });

  await rpcRegister();

  try {
    let patcher = new Patcher(config, rpcClient, wcmConfig.id);
    await patcher.checkForUpdate();
  } catch (error) {
    logger.error(error);
  }

  rpcDeviceStatsReport();
  rpcUpdatePeers();

  // Setup component RPCs
  dashboardRpcController.setupRpc();
  webcacheRpcController.setupRpc();
  networkRpcController.setupRpc();
  systemRpcController.setupRpc();
  diagnosticRpcController.setupRpc();
  configureRpcController.setupRpc();
  statusRpcController.setupRpc();
  maintenanceRpcController.setupRpc(rpcClient, wcmConfig.id);
  licenseRpcController.setupRpc();
}

async function main() {
  try {
    await deviceReporter.init();
    await startRpcClient();
  } catch (err) {
    restart(err);
  }
}

process.on("SIGINT", () => {
  logger.info("SIGINT signal received.");
  cleanup();
  process.exit();
});

module.exports.start = main;