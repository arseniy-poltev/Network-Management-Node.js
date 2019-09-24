const util = require("util");
const exec = util.promisify(require("child_process").exec);
const { spawn } = require("child_process");
const logger = require("./logger");

const flowsScript = process.env.NODE_ENV === "dev" ? "echo" : "/tce/etc/wanos/flows";
const wanosStatsScript = process.env.NODE_ENV === "dev" ? "/wanos/wanos-stats" : "/tce/etc/wanos/wanos-stats";
const makeWanosCfgScript = process.env.NODE_ENV === "dev" ? "echo" : "sudo -u tc /tce/etc/wanos/makewanoscfg.sh";
const reductionScript = process.env.NODE_ENV === "dev" ? "echo 2000000 1000000" : "tail -1 /tce/www/stats/reduction";
const fdiskListScript = process.env.NODE_ENV === "dev" ? "/wanos/wanos-fdisk list" : "/tce/etc/wanos/wanos-fdisk list";

class WanosScriptManager {

  static makeWanosCfgScriptReconfigure() {
    logger.debug("makewanoscfg.sh reconfigure");
    if (process.env.NODE_ENV === "dev") {
      return;
    }
    const subprocess = spawn("sudo", ["-u", "tc", "/tce/etc/wanos/makewanoscfg.sh", "-reconfigure"], {
      detached: true,
      stdio: "ignore",
      shell: "/usr/local/bin/bash"
    });
    subprocess.unref();
  }

  static makeWanosCfgScriptSoftReconfigure() {
    logger.debug("makewanoscfg.sh reconfigure soft");
    if (process.env.NODE_ENV === "dev") {
      return;
    }
    const subprocess = spawn("sudo", ["-u", "tc", "/tce/etc/wanos/makewanoscfg.sh", "-reconfigure", "1"], {
      detached: true,
      stdio: "ignore",
      shell: "/usr/local/bin/bash"
    });
    subprocess.unref();
  }

  static resetServices(stats, conf, ifMap, ds, wtcpx, boot, setpass, shutdown) {
    logger.debug(`sudo -u tc /tce/etc/wanos/reset.sh ${stats} ${conf} ${ifMap} ${ds} ${wtcpx} ${boot} ${setpass} ${shutdown}`);
    if (process.env.NODE_ENV === "dev") {
      return;
    }
    const subprocess = spawn("sudo", ["-u", "tc", "/tce/etc/wanos/reset.sh", stats, conf, ifMap, ds, wtcpx, boot, setpass, shutdown], {
      detached: true,
      stdio: "ignore",
      shell: "/usr/local/bin/bash"
    });
    subprocess.unref();
  }

  static resetTcpX() {
    logger.debug("sudo -u tc /tce/etc/wanos/makewanoscfg.sh -reset_wtcpx");
    if (process.env.NODE_ENV === "dev") {
      return;
    }
    const subprocess = spawn("sudo", ["-u", "tc", "/tce/etc/wanos/makewanoscfg.sh", "-reset_wtcpx"], {
      detached: true,
      stdio: "ignore",
      shell: "/usr/local/bin/bash"
    });
    subprocess.unref();
  }

  static scheduleBenchmark() {
    logger.debug("sudo -u tc /tce/etc/wanos/makewanoscfg.sh -benchmark");
    if (process.env.NODE_ENV === "dev") {
      return;
    }
    const subprocess = spawn("sudo", ["-u", "tc", "/tce/etc/wanos/makewanoscfg.sh", "-benchmark"], {
      detached: true,
      stdio: "ignore",
      shell: "/usr/local/bin/bash"
    });
    subprocess.unref();
  }

  static async makeWanosCfgScriptRemovePeer(peerId) {
    return exec(`${makeWanosCfgScript} -remove-peer ${peerId}`);
  }

  static async makeWanosCfgScript(options) {
    try {
      logger.debug(`${makeWanosCfgScript} ${options}`);
      return await exec(`${makeWanosCfgScript} ${options}`);
    } catch (err) {
      // HACK! When run in a certain order makeWanosCfgScript can throw an error about nfcapd
      // process not found. This happens when two command run close to each other tries to kill
      // the nfcapd process inside makeWanosCfgScript. An example would be setting NTP and timezone.
      // So we check if the error thrown is for this specific case, and if it is we can safely ignore
      // the error.
      if (err.message.trim().endsWith("nfcapd: no process found")) {
        return {
          stdout: ""
        };
      } else {
        throw err;
      }
    }
  }

  static async wanosStatsScript2hPeerTxStats(peerId) {
    let { stdout: txStats } = await exec(`${wanosStatsScript} 2h peer${peerId} peerlanrx peer${peerId} peerwantx`);
    return txStats;
  }

  static async wanosStatsScript2hPeerRxStats(peerId) {
    let { stdout: rxStats } = await exec(`${wanosStatsScript} 2h peer${peerId} peerlantx peer${peerId} peerwanrx`);
    return rxStats;
  }

  static async flowsScript(options) {
    return exec(`${flowsScript} ${options}`);
  }

  static async getDsDrive() {
    let { stdout } = await exec("df -h /wanos | grep -E '^/dev/|^default'");
    // eslint-disable-next-line no-unused-vars
    let [disk, size, used, available, usedPercentage, mount] = stdout.trim().split(/\s+/);
    if (disk.startsWith("/dev/")) {
      return disk.replace("/dev/", "");
    } else if (disk.startsWith("default/containers")) {
      return disk.replace("default/", "");
    }
    return "";
  }

  static async getDsDriveUsedPercentage() {
    let { stdout } = await exec("df -h /wanos | grep -E '^/dev/|^default'");
    // eslint-disable-next-line no-unused-vars
    let [disk, size, used, available, usedPercentage, mount] = stdout.trim().split(/\s+/);
    return parseInt(usedPercentage);
  }

  static async getDsDriveSizeGB() {
    let { stdout } = await exec("df -h /wanos | grep -E '^/dev/|^default'");
    // eslint-disable-next-line no-unused-vars
    let [disk, size, used, available, usedPercentage, mount] = stdout.trim().split(/\s+/);
    let sizeGB = parseFloat(size);
    if (/T/.test(size)) {
      sizeGB *= 1024;
    } else if (/M/.test(size)) {
      sizeGB /= 1024;
    }
    return sizeGB;
  }

  static async getDsUsedBytes() {
    let { stdout } = await exec("du -s /wanos/ds0/");
    let [dsUsedBytes] = stdout.split(" ");
    return parseInt(dsUsedBytes);
  }

  static async getSavedBytes() {
    let { stdout } = await exec(reductionScript);
    let [lan, wan] = stdout.split(" ");
    let saved = parseInt(lan) - parseInt(wan);
    return saved < 0 ? 0 : saved;
  }

  static async getPlatform() {
    let platform = "UbuntuCore";
    let { stdout } = await exec("uname -an");
    if (stdout.includes("timecore")) {
      platform = "MicroCore";
    }
    return platform;
  }

  static async getLoad() {
    let { stdout } = await exec("cat /proc/loadavg");
    let [load] = stdout.split(" ");
    return Math.floor(parseFloat(load) * 20);
  }

  static async getTailWithRegex(file, regexPattern, count) {
    let { stdout } = await exec(`grep -P '${regexPattern}' ${file} | tail -n ${count}`);
    return stdout.split("\n");
  }

  static async getTail(file, count) {
    let { stdout } = await exec(`tail -n ${count} ${file}`);
    return stdout.split("\n");
  }

  static async getWanosFdiskList() {
    let { stdout } = await exec(fdiskListScript);
    return stdout
      .split("\n")
      .filter(x => x.length > 0);
  }

  static async getTimezone() {
    let timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    let { stdout } = await exec("timedatectl status");
    let lines = stdout
      .split("\n");
    for (let line of lines) {
      let parts = line
        .split(": ");
      if (parts[0].endsWith("zone")) {
        timezone = parts[1].split(" ")[0];
        break;
      }
    }
    return timezone;
  }

  static async getNicDriver(nic) {
    let { stdout } = await exec(`ethtool --driver ${nic} | grep driver`);
    if (stdout && stdout.startsWith("driver: ")) {
      return stdout.replace("driver: ", "").trim();
    }
    return "";
  }

  static async getDateSeconds() {
    let { stdout } = await exec("date +%s");
    return parseInt(stdout);
  }

  static async getNetstat() {
    let { stdout } = await exec("netstat -nat");
    return stdout.split("\n");
  }

  static async getPing(hostIp, ipv6, count) {
    try {
      let { stdout } = await exec(`${ipv6 ? "ping6" : "ping"} -c ${count} ${hostIp}`);
      return stdout.split("\n");
    } catch (err) {
      // If error code is 1 it just means there was no ping response, so return the result.
      if (err.code === 1) {
        return err.stdout.split("\n");
      }
      throw err;
    }
  }

  static async getTraceroute(hostIp, hops, ipv6, icmp, lookup) {
    let { stdout } = await exec(`traceroute ${ipv6 ? "-6" : "-4"} ${lookup ? "" : "-n"} ${icmp ? "-I" : ""} -m ${hops} ${hostIp}`);
    return stdout.split("\n");
  }

  static async applyPatch(oldFile, patchFile, newFile) {
    //xdelta3 -d -s ./b.tar.bz2 patch b.new.tar.bz2
    let { stdout } = await exec(`xdelta3 -dq -s ${oldFile} ${patchFile} ${newFile}`);
    return stdout;
  }

  static async extractTarBz2(tarBz2File, destinationDirectory) {
    //tar -jxf /tce/packages/wcm-agent.1.0.1.tar.bz2 -C /tce/packages/
    let { stdout } = await exec(`tar -jxf ${tarBz2File} -C ${destinationDirectory}`);
    return stdout;
  }

  static async removePackageDir(packageDir) {
    let { stdout } = await exec(`rm -rf ${packageDir}`);
    return stdout;
  }

  static async backupConfiguration() {
    //sudo -u tc /tce/etc/wanos/makewanoscfg.sh -backupcfg > /dev/null
    let { stdout } = await exec("sudo -u tc /tce/etc/wanos/makewanoscfg.sh -backupcfg > /dev/null");
    return stdout;
  }

  static async setPathConfig(config) {
    //sudo -u tc /tce/etc/wanos/makewanoscfg.sh -ps-global-settings $multiwan $failover $preempt $timeout $track_peer > /dev/null
    let { stdout } = await exec(`sudo -u tc /tce/etc/wanos/makewanoscfg.sh -ps-global-settings ${config.multiWan} ${config.failOver} ${config.preempt} ${config.timeout} ${config.trackPeer} > /dev/null`);
    return stdout;
  }

  static async removePathGateway(isPrimary) {
    //sudo -u tc /tce/etc/wanos/makewanoscfg.sh -remove-ps-primary-gateway > /dev/null
    //sudo -u tc /tce/etc/wanos/makewanoscfg.sh -remove-ps-secondary-gateway > /dev/null
    let { stdout } = await exec(`sudo -u tc /tce/etc/wanos/makewanoscfg.sh -remove-ps-${isPrimary ? 'primary' : 'secondary'}-gateway > /dev/null`);
    return stdout;
  }

  static async registerLicense() {
    //sudo -u tc /tce/etc/wanos/makewanoscfg.sh -new_license
    let { stdout } = await exec(`sudo -u tc /tce/etc/wanos/makewanoscfg.sh -new_license`);
    return stdout;
  }

  static async reconfigureWebcache() {
    let { stdout } = await exec(`/tce/etc/wanos/makewanoscfg.sh -webcache_reconfigure`);
    return stdout;
  }
}

module.exports = {
  WanosScriptManager
};