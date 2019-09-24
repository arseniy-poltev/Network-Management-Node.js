const fs = require("fs");
const path = require("path");
const grpc = require("grpc");
const messages = require("./grpc/patcher_pb");
const fileTransferMessages = require("./grpc/file_transfer_pb");
const { WanosScriptManager } = require("./wanos-script-manager");
const { getFileHash } = require("./helpers");
const logger = require("./logger");

class Patcher {
  constructor(config, rpcClient, deviceId) {
    this._config = config;
    this._rpcClient = rpcClient;
    this._deviceId = deviceId;
  }

  async checkForUpdate() {
    logger.info("Checking for updates...");

    let serverAgentVersion = await this.getServerAgentVersion();
    if (this._config.version === serverAgentVersion.version) {
      logger.info("Agent is up to date.");
      return;
    }
    // There is a new agent version available.
    logger.info(`Downloading update ${serverAgentVersion.version}`);
    let filename = serverAgentVersion.updateType === messages.UpdateTypeEnum.PATCH ? `wcm-agent.${this._config.version}-${serverAgentVersion.version}.patch` : `wcm-agent.${serverAgentVersion.version}.tar.bz2`;
    let localFile = path.join(this._config.imagePath, filename);
    await this.downloadFile(localFile, serverAgentVersion.updateFileUrl);

    let newPackageFile = path.join(this._config.imagePath, `wcm-agent.${serverAgentVersion.version}.tar.bz2`);
    if (serverAgentVersion.updateType === messages.UpdateTypeEnum.PATCH) {
      // Downloaded file is a patch file that should be applied on top of the existing package file.
      logger.info(`Applying patch file ${localFile}`);
      let localPackageFile = path.join(this._config.imagePath, `wcm-agent.${this._config.version}.tar.bz2`);
      await this.applyPatch(localPackageFile, localFile, newPackageFile);
    } else if (serverAgentVersion.updateType === messages.UpdateTypeEnum.FULL) {
      // Downloaded file is a full package.
      logger.info(`Applying full update ${localFile}`);
      newPackageFile = localFile;
    } else {
      throw new Error(`Invalid update type: ${serverAgentVersion.updateType}`);
    }

    // Verify the new package file
    logger.info(`Verifying new package file ${newPackageFile}`);
    let newPackageHash = await getFileHash(newPackageFile, serverAgentVersion.agentPackageHashAlgo);
    if (newPackageHash !== serverAgentVersion.agentPackageHash) {
      throw new Error(`Invalid file hash. Expected ${serverAgentVersion.agentPackageHash}, got ${newPackageHash}`);
    }

    // Install new package
    let newPackageDir = path.join(this._config.imagePath, `wcm-agent.${serverAgentVersion.version}`);
    if (fs.existsSync(newPackageDir)) {
      logger.info(`Deleting directory ${newPackageDir}`);
      await WanosScriptManager.removePackageDir(newPackageDir);
    }
    logger.info(`Extracting new package ${newPackageFile}`);
    await WanosScriptManager.extractTarBz2(newPackageFile, this._config.imagePath);
    let wcmAgentSymlink = path.join(this._config.imagePath, "wcm-agent");
    if (fs.existsSync(wcmAgentSymlink)) {
      fs.unlinkSync(wcmAgentSymlink);
    }
    fs.symlinkSync(newPackageDir, wcmAgentSymlink);
    logger.info("New package applied, restarting agent...");
    process.exit();
  }

  async applyPatch(oldFile, patchFile, newFile) {
    if (fs.existsSync(newFile)) {
      fs.unlinkSync(newFile);
    }
    await WanosScriptManager.applyPatch(oldFile, patchFile, newFile);
  }

  getServerAgentVersion() {
    return new Promise((resolve, reject) => {
      try {
        let metadata = new grpc.Metadata();
        metadata.set("id", this._deviceId);
        let request = new messages.ServerAgentVersionRequest();
        request.setVersion(this._config.version);
        request.setLocalAgentFilename(`wcm-agent.${this._config.version}.tar.bz2`);
        this._rpcClient.getServerAgentVersion(request, metadata, (err, response) => {
          if (err) {
            return reject(err);
          }
          return resolve(response.toObject());
        });
      } catch (err) {
        return reject(err);
      }
    });
  }

  downloadFile(localFile, remoteUrl) {
    return new Promise((resolve, reject) => {
      try {
        let fileStream = fs.createWriteStream(localFile);

        fileStream.on("ready", () => {
          let fileInfo = null;
          let metadata = new grpc.Metadata();
          metadata.set("id", this._deviceId);
          let request = new fileTransferMessages.FileTransferRequest();
          request.setFileUrl(remoteUrl);

          let call = this._rpcClient.downloadFile(request, metadata);

          call.on("data", (fileData) => {
            if (fileData.hasFileInfo()) {
              fileInfo = fileData.getFileInfo().toObject();
            }
            if (fileData.hasChunk()) {
              let chunk = fileData.getChunk().getData();
              fileStream.write(chunk);
            }
          });

          call.on("end", async () => {
            fileStream.once("finish", async () => {
              if (!fileInfo) {
                return reject(new Error(`No file info received for ${remoteUrl}`));
              }
              await this.verifyFile(localFile, fileInfo);
              return resolve();
            });
            fileStream.end();
          });

          call.on("error", (err) => {
            return reject(err);
          });
        });
      } catch (err) {
        return reject(err);
      }
    });
  }

  async verifyFile(localFile, fileInfo) {
    logger.info(`Verifying file ${localFile}`);
    let fileStat = fs.statSync(localFile);
    if (fileStat.size !== fileInfo.size) {
      throw new Error(`Invalid file size. Expected ${fileInfo.size}, got ${fileStat.size}`);
    }
    // Verify hash
    let hash = await getFileHash(localFile, fileInfo.hashAlgo);
    if (hash !== fileInfo.hash) {
      throw new Error(`Invalid file hash. Expected ${fileInfo.hash}, got ${hash}`);
    }
  }
}

module.exports = {
  Patcher
};