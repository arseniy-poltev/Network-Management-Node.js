const fs = require("fs");
const path = require("path");
const grpc = require("grpc");
const messages = require("./grpc/maintenance_pb");
const fileTransferMessages = require("./grpc/file_transfer_pb");
const { WanosScriptManager } = require("./wanos-script-manager");
const { getFileHash } = require("./helpers");
const logger = require("./logger");

const BackupFilePattern = "backupcfg.tar";

class MaintenanceController {
  constructor(config, wanosConf) {
    this._config = config;
    this._wanosConf = wanosConf;
    this._rpcClient = null;
    this._deviceId = null;
  }

  setupRpc(rpcClient, deviceId) {
    this._rpcClient = rpcClient;
    this._deviceId = deviceId;
  }

  cleanup() {
    this._rpcClient = null;
  }

  /**
   * @returns {Promise<messages.StartBackupResponse>}
   */
  async startBackup(updateSchedule) {
    let result = await this._startBackup();
    this._scheduleUploadBackup(updateSchedule);
    return result;
  }

  _scheduleUploadBackup(updateSchedule) {
    setImmediate(async () => {
      let backupFile = this._getLatestBackupFilePath();
      if (!backupFile) {
        logger.error("Upload backup schedule, but no backup file found.");
        return;
      }
      await this._uploadBackup(backupFile, updateSchedule);
    });
  }

  _getLatestBackupFilePath() {
    let files = fs.readdirSync(this._config.backupPath);
    let backupFiles = [];
    for (let file of files) {
      let filePath = path.join(this._config.backupPath, file);
      let fileStat = fs.statSync(filePath);
      if (!file.endsWith(BackupFilePattern)) {
        continue;
      }
      backupFiles.push({
        filePath,
        fileStat
      });
    }

    if (backupFiles.length === 0) {
      return null;
    }
    // Sort by modified date descending
    backupFiles.sort((a,b) => b.fileStat.mtime - a.fileStat.mtime);
    return backupFiles[0].filePath;
  }

  async _uploadBackup(backupFile, updateSchedule) {
    if (!this._rpcClient) {
      logger.error("Upload backup with no rpc client.");
      return;
    }
    if (!this._deviceId) {
      logger.error("Upload backup with no device ID.");
      return;
    }
    if (!fs.existsSync(backupFile)) {
      logger.error(`File ${backupFile} not found.`);
      return;
    }
    let metadata = new grpc.Metadata();
    metadata.set("id", this._deviceId);
    // eslint-disable-next-line no-unused-vars
    let call = this._rpcClient.uploadBackup(metadata, (error, response) => {
      if (error) {
        logger.error(error);
      } else {
        logger.info(`Backup ${backupFile} uploaded.`);
      }
    });

    try {
      // Send file info
      let fileStat = fs.statSync(backupFile);
      let hash = await getFileHash(backupFile, this._config.hashAlgo);

      let fileInfo = new fileTransferMessages.FileInfo();
      fileInfo.setName(path.basename(backupFile));
      fileInfo.setSize(fileStat.size);
      fileInfo.setHash(hash);
      fileInfo.setHashAlgo(this._config.hashAlgo);

      let backupInfo = new messages.BackupInfo();
      backupInfo.setVersion(this._wanosConf.config.VERSION);
      backupInfo.setFileInfo(fileInfo);
      backupInfo.setUpdateSchedule(updateSchedule);

      let fileStream = fs.createReadStream(backupFile, { highWaterMark: 64 * 1024 });
      fileStream.on("data", (data) => {
        let chunk = new fileTransferMessages.Chunk();
        chunk.setData(data);
        let request = new messages.UploadBackupRequest();
        if (backupInfo !== null) {
          request.setBackupInfo(backupInfo);
          backupInfo = null;
        }
        request.setChunk(chunk);
        call.write(request);
      });

      fileStream.on("end", () => {
        call.end();
      });

      fileStream.on("error", (error) => {
        logger.error(`Error uploading backup file ${backupFile}`, error);
        call.end();
      });
    } catch (error) {
      logger.error(`Error uploading backup file ${backupFile}`, error);
      call.end();
    }
  }

  /**
   * @returns {Promise<messages.StartBackupResponse>}
   */
  async _startBackup() {
    await WanosScriptManager.backupConfiguration();
    let result = new messages.StartBackupResponse();
    return result;
  }
}

class MaintenanceRpcController {

  constructor(setupRpcCall, handleError, config, wanosConf) {
    this.setupRpcCall = setupRpcCall;
    this.handleError = handleError;
    this.maintenanceController = new MaintenanceController(config, wanosConf);
  }

  rpcStartBackup() {
    const handleRequest = async (request) => {
      try {
        return await this.maintenanceController.startBackup(request.getUpdateSchedule());
      } catch (error) {
        return this.handleError(error, new messages.StartBackupResponse());
      }
    };
    this.setupRpcCall("startBackup", handleRequest);
  }

  setupRpc(rpcClient, deviceId) {
    this.maintenanceController.setupRpc(rpcClient, deviceId);
    this.rpcStartBackup();
  }

  cleanup() {
    this.maintenanceController.cleanup();
  }
}

// (async () => {
//   const config = require("./config");
//   const WanosConf = require("./wanos-conf");
//   let wanosConf = new WanosConf("/etc/wanos/wanos.conf", "/etc/wanos/peers");
//   await wanosConf.loadConfig();
//   let reporter = new MaintenanceController(config, wanosConf);
//   try {
//     let result = await reporter.startBackup();
//     console.log(JSON.stringify(result.toObject()));
//   } catch (err) {
//     console.log(err);
//   }
//   console.log(reporter._getLatestBackupFilePath());
// })();

module.exports = {
  MaintenanceRpcController
};