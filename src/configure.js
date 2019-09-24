const net = require("net");
const ipaddr = require("ipaddr.js");
const validator = require("validator");
const messages = require("./grpc/configure_pb");
const { ErrorCode, ValidationCode, RpcError, InvalidArgumentError, ValidationError } = require("./errors");
const { WanosScriptManager } = require("./wanos-script-manager");
const { readFileLines, writeFileLines, isNumber } = require("./helpers");
const config = require("./config");

const TcpxPoliciesDefaultRuleId = 100;
const TunnelPoliciesDefaultRuleId = 1000;
const TrafficPoliciesCatchAllId = 1001;
const TrafficPoliciesReadonlyIds = [1000, 1001];
const TrafficPoliciesKindOptions = ["tcp", "udp", "src tcp", "dst tcp", "src udp", "dst udp"];

class ConfigureReporter {
  constructor(wanosConf) {
    this._wanosConf = wanosConf;
  }

  /**
   * @returns {Promise<messages.SystemSettings>}
   */
  async getSystemSettings() {
    let result = await this._getSystemSettings();
    return result;
  }

  /**
   * @param {messages.SystemSettingsData} systemSettings
   * @returns {Promise<messages.SystemSettings>}
   */
  async updateSystemSettings(systemSettings) {
    let settings = systemSettings.toObject();
    let result = await this._updateSystemSettings(settings);
    // Since we changed the config we need to reload the config inside wanosConf
    await this._wanosConf.loadConfig();
    return result;
  }

  /**
   * @returns {Promise<messages.NetworkSettings>}
   */
  async getNetworkSettings() {
    let result = await this._getNetworkSettings();
    return result;
  }

  /**
   * @param {messages.NetworkSettingsData} networkSettings
   * @returns {Promise<messages.NetworkSettings>}
   */
  async updateNetworkSettings(networkSettings) {
    let settings = networkSettings.toObject();
    let result = await this._updateNetworkSettings(settings);
    // Since we changed the config we need to reload the config inside wanosConf
    await this._wanosConf.loadConfig();
    return result;
  }

  /**
   * @returns {Promise<messages.OptimizationSettings>}
   */
  async getOptimizationSettings() {
    let result = await this._getOptimizationSettings();
    return result;
  }

  /**
   * @param {messages.OptimizationSettingsData} optimizationSettings
   * @returns {Promise<messages.OptimizationSettings>}
   */
  async updateOptimizationSettings(optimizationSettings) {
    let settings = optimizationSettings.toObject();
    let result = await this._updateOptimizationSettings(settings);
    // Since we changed the config we need to reload the config inside wanosConf
    await this._wanosConf.loadConfig();
    return result;
  }

  /**
   * @returns {Promise<messages.MonitorSettings>}
   */
  async getMonitorSettings() {
    let result = await this._getMonitorSettings();
    return result;
  }

  /**
   * @param {messages.MonitorSettingsData} monitorSettings
   * @returns {Promise<messages.MonitorSettings>}
   */
  async updateMonitorSettings(monitorSettings) {
    let settings = monitorSettings.toObject();
    let result = await this._updateMonitorSettings(settings);
    // Since we changed the config we need to reload the config inside wanosConf
    await this._wanosConf.loadConfig();
    return result;
  }

  /**
   * @returns {Promise<messages.TunnelPolicies>}
   */
  async getTunnelPolicies() {
    let result = await this._getTunnelPolicies();
    return result;
  }

  /**
   * @param {number} ruleId
   * @returns {Promise<messages.TunnelPoliciesDeleteRule>}
   */
  async deleteTunnelPoliciesRule(ruleId) {
    if (ruleId === TunnelPoliciesDefaultRuleId) {
      throw new InvalidArgumentError("ruleId", "Default rule is required.");
    }
    let result = await this._deleteTunnelPoliciesRule(ruleId);
    await this._setReconfigureFile();
    return result;
  }

  /**
   * @param {messages.TunnelRule} tunnelRule
   * @returns {Promise<messages.TunnelPoliciesUpdateRule>}
   */
  async updateTunnelPoliciesRule(tunnelRule) {
    let rule = tunnelRule.toObject();
    if (rule.ruleId === TunnelPoliciesDefaultRuleId) {
      throw new InvalidArgumentError("ruleId", "Default rule cannot be changed.");
    }
    let result = await this._updateTunnelPoliciesRule(rule);
    await this._setReconfigureFile();
    return result;
  }

  /**
   * @param {messages.TunnelRule} tunnelRule
   * @returns {Promise<messages.TunnelPoliciesAddRule>}
   */
  async addTunnelPoliciesRule(tunnelRule) {
    let result = await this._addTunnelPoliciesRule(tunnelRule);
    await this._setReconfigureFile();
    return result;
  }

  /**
   * @returns {Promise<messages.Routes>}
   */
  async getRoutes() {
    let result = await this._getRoutes();
    return result;
  }

  /**
   * @returns {Promise<messages.RouteAdd>}
   */
  async addRoute(route) {
    let result = await this._addRoute(route);
    return result;
  }

  /**
   * @returns {Promise<messages.RouteUpdate>}
   */
  async updateRoute(route) {
    let result = await this._updateRoute(route);
    return result;
  }

  /**
   * @returns {Promise<messages.RouteRemove>}
   */
  async removeRoute(ruleId) {
    let result = await this._removeRoute(ruleId);
    return result;
  }

  /**
   * @returns {Promise<messages.WebcacheConfResponse>}
   */
  async getWebcacheConfig() {
    let result = await this._getWebcacheConfig();
    return result;
  }  

  /**
   * @param {messages.WebcacheConfig} config
   * @returns {Promise<messages.WebcacheConfResponse>}
   */
  async setWebcacheConfig(conf) {
    let result = await this._setWebcacheConfig(conf);
    return result;
  }  

  /**
   * @returns {Promise<messages.TrafficPolicies>}
   */
  async getTrafficPolicies() {
    let result = await this._getTrafficPolicies();
    return result;
  }

  /**
   * @param {number} ruleId
   * @returns {Promise<messages.TrafficPolicyDelete>}
   */
  async deleteTrafficPolicy(ruleId) {
    if (TrafficPoliciesReadonlyIds.includes(ruleId) || ruleId < 0) {
      throw new InvalidArgumentError("ruleId", "Default policy is required.");
    }
    let result = await this._deleteTrafficPolicy(ruleId);
    await this._setReconfigureFile();
    return result;
  }

  /**
   * @param {messages.TrafficPolicy} trafficPolicy
   * @returns {Promise<messages.TrafficPolicyUpdate>}
   */
  async updateTrafficPolicy(trafficPolicy) {
    if (TrafficPoliciesReadonlyIds.includes(trafficPolicy.getRuleId()) || trafficPolicy.getRuleId() < 0) {
      throw new InvalidArgumentError("ruleId", "Default policy cannot be changed.");
    }
    let result = await this._updateTrafficPolicy(trafficPolicy);
    await this._setReconfigureFile();
    return result;
  }

  /**
   * @param {messages.TrafficPolicy} trafficPolicy
   * @returns {Promise<messages.TrafficPolicyAdd>}
   */
  async addTrafficPolicy(trafficPolicy) {
    let result = await this._addTrafficPolicy(trafficPolicy);
    await this._setReconfigureFile();
    return result;
  }

  /**
   * @returns {Promise<messages.PathConfigResponse>}
   */
  async getPathConfig() {
    let result = await this._getPathConfig();
    return result;
  }

  /**
   * @param {messages.PathConfig} config
   * @returns {Promise<messages.PathConfigResponse>}
   */
  async setPathConfig(config) {
    let result = await this._setPathConfig(config);
    await this._setReconfigureFile();
    return result;
  }

  /**
   * @returns {Promise<messages.PathGatewaysResponse>}
   */
  async getPathGateways() {
    let result = await this._getPathGateways();
    return result;
  }

  /**
   * @param {bool} isPrimary
   * @returns {Promise<messages.PathGatewaysResponse>}
   */
  async removePathGateway(isPrimary) {
    let result = await this._removePathGateway(isPrimary);
    await this._setReconfigureFile();
    return result;
  }

  /**
   * @returns {Promise<messages.TcpxRules>}
   */
  async getTcpxRules() {
      let result = await this._getTcpxRules();
      return result;
  }

  /**
   * @param {messages.AddTcpxRuleRequest} rule
   * @returns {Promise<messages.TcpxRuleAdd>}
   */
  async addTcpxRule(rule) {
      let result = await this._addTcpxRule(rule);
      await this._setReconfigureFile();
      return result;
  }

  /**
   * @param {messages.TcpxRule} rule
   * @returns {Promise<messages.TcpxRuleUpdate>}
   */
  async updateTcpxRule(rule) {
      let result = await this._updateTcpxRule(rule);
      await this._setReconfigureFile();
      return result;
  }

  /**
   * @param {Integer} ruleId
   * @returns {Promise<messages.TcpxRuleRemove>}
   */
  async removeTcpxRule(ruleId) {
      let result = await this._removeTcpxRule(ruleId);
      await this._setReconfigureFile();
      return result;
  }

  /**
   * @param {Integer} ruleId
   * @param {Bool} upward - false: downward, true: upward
   * @returns {Promise<messages.TcpxRuleMove>}
   */
  async moveTcpxRule(ruleId, upward) {
      let result = await this._moveTcpxRule(ruleId, upward);
      await this._setReconfigureFile();
      return result;
  }

  /**
   * @param {string} kind
   * @returns {Promise<messages.ServiceReset>}
   */
  async resetService(kind) {
    // eslint-disable-next-line no-unused-vars
    let service, tcp, datastore, stats, factory, reboot, shutdown;
    service = tcp = datastore = stats = factory = reboot = shutdown = "no";

    switch (kind) {
      case "service":
        service = "yes";
        break;
      case "tcp":
        tcp = "yes";
        break;
      case "datastore":
        datastore = "yes";
        break;
      case "stats":
        stats = "yes";
        break;
      case "factory":
        factory = "yes";
        break;
      case "reboot":
        reboot = "yes";
        break;
      case "shutdown":
        shutdown = "yes";
        break;
      default:
        throw new InvalidArgumentError("kind", "Invalid kind.");
    }
    let message = "";
    let method;
    if (kind === "tcp") {
      method = () => { WanosScriptManager.resetTcpX(); };
      message = "Resetting the TCP Accelerator Service";
    } else {
      method = () => { WanosScriptManager.resetServices(stats, factory, "no", datastore, tcp, reboot, "no", shutdown); };
      if (reboot === "yes") {
        message = "Reset initiated. Appliance is rebooting.";
      }
      if (shutdown === "yes") {
        message = "Appliance is shutting down.";
      }
      if (reboot === "no" && shutdown === "no") {
        message = "Reset service initiated. Processes are resetting.";
      }
    }

    // Schedule the script to run 1 second later so we have time to send our response back to the server.
    if (method) {
      setTimeout(method, 1000);
    }

    let result = new messages.ServiceReset();
    result.setMessage(message);
    return result;
  }

  /**
   * @param {string} password
   * @returns {Promise<messages.SshPasswordChange>}
   */
  async changeSshPassword(password) {
    let lines = await readFileLines(config.lighttpdPasswordFile);
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].startsWith("wanos:")) {
        lines[i] = `wanos:${password}\n`;
        break;
      }
    }
    await writeFileLines(config.lighttpdPasswordFile, lines);
    await WanosScriptManager.makeWanosCfgScript("-sshpass");
    let result = new messages.SshPasswordChange();
    result.setMessage("SSH Password Changed.");
    return result;
  }

  async _setReconfigureFile() {
    await writeFileLines(config.reconfigureFile, ["1"]);
  }

  /**
   * @returns {Promise<messages.Routes>}
   */
  async _getRoutes() {
    let result = new messages.Routes();

    let routes = [];
    let lines = await readFileLines(config.staticRoutesFile);
    for (let ln in lines) {
      let [netmask, gateway] = lines[ln].split(" ").map(x => x.trim());
      let route = new messages.Route();
      route.setRuleId(ln);
      route.setDestination(netmask);
      route.setGateway(gateway);
      routes.push(route);
    }

    result.setRoutesList(routes);
    return result;
  }

  _validateRoute(route) {
    if (!validator.isIPRange(route.getDestination()))
      throw new InvalidArgumentError("destination", "Invalid format.");

    if (!validator.isIP(route.getGateway()))
      throw new InvalidArgumentError("gateway", "Invalid format.");
  }

  /**
   * @param {messages.Route} route
   * @returns {Promise<messages.RouteAdd>}
   */
  async _addRoute(route) {
    this._validateRoute(route);
    let result = new messages.RouteAdd();
    let lines = await readFileLines(config.staticRoutesFile);
    let isDuplicated = lines.find(line => line.startsWith(route.getDestination()));
    if (isDuplicated)
      throw new InvalidArgumentError("destination", "Route defined already.");

    result.setRuleId(lines.length);

    lines.push(route.getDestination() + " " + route.getGateway());
    await writeFileLines(config.staticRoutesFile, lines);

    return result;
  }

  /**
   * @param {messages.Route} route
   * @returns {Promise<messages.RouteUpdate>}
   */
  async _updateRoute(route) {
    this._validateRoute(route);
    let result = new messages.RouteUpdate();
    let lines = await readFileLines(config.staticRoutesFile);
    if (lines.length <= route.getRuleId()) {
      throw new InvalidArgumentError("ruleId", "Route not found.");
    } else {
      lines[route.getRuleId()] = route.getDestination() + " " + route.getGateway();
      await writeFileLines(config.staticRoutesFile, lines);
    }
    return result;
  }

  /**
   * @param {uint32} ruleId
   * @returns {Promise<messages.RouteRemove>}
   */
  async _removeRoute(ruleId) {
    let result = new messages.RouteRemove();
    let lines = await readFileLines(config.staticRoutesFile);
    if (lines.length <= ruleId) {
      throw new InvalidArgumentError("ruleId", "Route not found.");
    } else {
      lines.splice(ruleId, 1);
      await writeFileLines(config.staticRoutesFile, lines);
    }
    return result;
  }

  async _parseTcpxPoliciesFile() {
    let lines = await readFileLines(config.tcpxPoliciesFile);
    let rules = [];
    for (let line of lines) {
      if (!line || !line.match(/\=/)) continue;
      let [ruleId, commaString] = line.split(/\s*\=\s*/);
      let rule = new messages.TcpxRule();
      let values = commaString.split(',');
      if (values.length != 4) continue;
      try {
        rule.setRuleId(parseInt(ruleId));
        rule.setReadonly(parseInt(ruleId) === TcpxPoliciesDefaultRuleId);
        rule.setSource(values[0]);
        rule.setDestination(values[1]);
        rule.setPort(values[2] ? parseInt(values[2]) : 0);
        rule.setAcceleration(!!values[3].match(/true/i));
      } catch (err) {
        // ignore invalid config
        continue;
      }
      rules.push(rule);
    }

    return rules;
  }

  _sanitizeTcpxRule(rule) {
    if (!rule.getSource()) rule.setSource('0.0.0.0/0');
    if (!rule.getDestination()) rule.setDestination('0.0.0.0/0');
  }

  _validatesTcpxRule(rule) {
    if (rule.getPort() > 65535)
      throw new ValidationError("port", "Invalid port range.", ValidationCode.MAX_RANGE);
    if (!validator.isIPRange(rule.getSource()))
      throw new ValidationError("source", "Invalid source.", ValidationCode.INVALID_TYPE);
    if (!validator.isIPRange(rule.getDestination()))
      throw new ValidationError("destination", "Invalid source.", ValidationCode.INVALID_TYPE);
  }

  /**
   * @returns {Promise<messages.TcpxRules>}
   */
  async _getTcpxRules() {
    let result = new messages.TcpxRules();
    let rules = await this._parseTcpxPoliciesFile();
    result.setRulesList(rules);
    return result;
  }

  /**
   * @param {messages.AddTcpxRuleRequest} rule
   * @returns {Promise<messages.TcpxRuleAdd>}
   */
  async _addTcpxRule(rule) {
    let result = new messages.TcpxRuleAdd();
    let rules = await this._parseTcpxPoliciesFile();
    if (rules.length >= 100)
      throw new ValidationError("source", "Can't add Rule", ValidationCode.MAX_RANGE);

    this._sanitizeTcpxRule(rule);
    if (rules.find(r => r.getPort() === rule.getPort() && r.getSource == rule.getSource() && r.getDestination() == rule.getDestination()))
      throw new ValidationError("source", "Rule already exists.", ValidationCode.UNIQUE);
    this._validatesTcpxRule(rule);

    let ruleId = 0;
    for (let i = 1; i < 99; i++) {
      if (!rules.find(r => r.getRuleId() == i)) {
        ruleId = i;
        break;
      }
    }
    let newRule = new messages.TcpxRule();
    newRule.setRuleId(ruleId);
    newRule.setSource(rule.getSource())
    newRule.setDestination(rule.getDestination())
    newRule.setPort(rule.getPort());
    newRule.setAcceleration(rule.getAcceleration());
    rules.push(newRule);
    rules.sort((a, b) => a.getRuleId() - b.getRuleId());

    let lines = rules.map(r => {
      return `${r.getRuleId()}=${r.getSource()},${r.getDestination()},${r.getPort() ? r.getPort() : ''},${r.getAcceleration()}`;
    });
    lines.push("");
    await writeFileLines(config.tcpxPoliciesFile, lines);

    result.setRuleId(ruleId);
    return result;
  }

  /**
   * @param {messages.TcpxRule} rule
   * @returns {Promise<messages.TcpxRuleUpdate>}
   */
  async _updateTcpxRule(rule) {
    let result = new messages.TcpxRuleUpdate();
    let rules = await this._parseTcpxPoliciesFile();

    if (rule.getRuleId() == TcpxPoliciesDefaultRuleId)
      throw new InvalidArgumentError("ruleId", "Default rule can't be changed.");

    let existingRule = rules.find(r => r.getRuleId() == rule.getRuleId());
    if (!existingRule)
      throw new InvalidArgumentError("ruleId", "Rule not found.");

    this._sanitizeTcpxRule(rule);
    this._validatesTcpxRule(rule);

    existingRule.setSource(rule.getSource());
    existingRule.setDestination(rule.getDestination());
    existingRule.setPort(rule.getPort());
    existingRule.setAcceleration(rule.getAcceleration());

    let lines = rules.map(r => {
      return `${r.getRuleId()}=${r.getSource()},${r.getDestination()},${r.getPort() ? r.getPort() : ''},${r.getAcceleration()}`;
    });
    lines.push("");
    await writeFileLines(config.tcpxPoliciesFile, lines);

    return result;
  }

  /**
   * @param {messages.AddTcpxRuleRequest} rule
   * @returns {Promise<messages.TcpxRuleAdd>}
   */
  async _removeTcpxRule(ruleId) {
    let result = new messages.TcpxRuleRemove();
    let rules = await this._parseTcpxPoliciesFile();
    let ruleIndex;
    if (ruleId == TcpxPoliciesDefaultRuleId)
      throw new InvalidArgumentError("ruleId", "Default rule is required.");
    ruleIndex = rules.findIndex(r => r.getRuleId() === ruleId);
    if (ruleIndex < 0)
      throw new InvalidArgumentError("ruleId", "Rule not found.");
    rules.splice(ruleIndex, 1);

    let lines = rules.map(r => {
      return `${r.getRuleId()}=${r.getSource()},${r.getDestination()},${r.getPort() ? r.getPort() : ''},${r.getAcceleration()}`;
    });
    lines.push("");
    await writeFileLines(config.tcpxPoliciesFile, lines);

    return result;
  }

  /**
   * @param {Integer} ruleId
   * @param {Bool} upward - false: downward, true: upward
   * @returns {Promise<messages.TcpxRuleMove>}
   */
  async _moveTcpxRule(ruleId, upward) {
    let result = new messages.TcpxRuleMove();
    let rules = await this._parseTcpxPoliciesFile();
    let ruleIndex, tmpRuleId;
    if (ruleId == TcpxPoliciesDefaultRuleId)
      throw new InvalidArgumentError("ruleId", "Default can't be changed.");
    ruleIndex = rules.findIndex(r => r.getRuleId() === ruleId);
    if (ruleIndex < 0)
      throw new InvalidArgumentError("ruleId", "Rule not found.");

    if (upward) {
      if (ruleIndex === 0 || rules[ruleIndex - 1].getRuleId() === TcpxPoliciesDefaultRuleId)
        throw new InvalidArgumentError("ruleId", "Can't move 1.");
      tmpRuleId = rules[ruleIndex].getRuleId();
      rules[ruleIndex].setRuleId(rules[ruleIndex - 1].getRuleId());
      rules[ruleIndex - 1].setRuleId(tmpRuleId);
    } else {
      if (ruleIndex === rules.length - 1 || rules[ruleIndex + 1].getRuleId() === TcpxPoliciesDefaultRuleId)
        throw new InvalidArgumentError("ruleId", "Can't move 2.");
      tmpRuleId = rules[ruleIndex].getRuleId();
      rules[ruleIndex].setRuleId(rules[ruleIndex + 1].getRuleId());
      rules[ruleIndex + 1].setRuleId(tmpRuleId);
    }
    rules.sort((a,b) => a.getRuleId() - b.getRuleId());

    let lines = rules.map(r => {
      return `${r.getRuleId()}=${r.getSource()},${r.getDestination()},${r.getPort() ? r.getPort() : ''},${r.getAcceleration()}`;
    });
    lines.push("");
    await writeFileLines(config.tcpxPoliciesFile, lines);

    return result;
  }



  /**
   * @returns {Promise<messages.WebcacheConfig>}
   */
  async _parseWebcachConfig() {
    let conf = new messages.WebcacheConfig();
    let line, lines, tokens;

    // Allowed Subnets
    let subnets = [];
    lines = await readFileLines(config.webcacheConfPath + "squid_acl.conf");
    for (line of lines) {
      tokens = line.split(' ');
      if (tokens.length !== 4) continue;
      subnets.push(tokens[3]);
    }
    conf.setAllowedSubnetList(subnets);

    // SSL Servers
    let sslServers = [];
    lines = await readFileLines(config.webcacheConfPath + "ssl_acl.conf");
    for (line of lines) {
      tokens = line.split(' ');
      if (tokens.length !== 4) continue;
      sslServers.push(tokens[0]);
    }
    conf.setSslServerList(sslServers);

    // Blacklist
    let blackIps = await readFileLines(config.webcacheConfPath + "ip_deny_acl.conf");
    conf.setBlacklistIpList(blackIps);
    let blackDomains = await readFileLines(config.webcacheConfPath + "domain_deny_acl.conf");
    conf.setBlacklistUrlList(blackDomains);
    let blackRegexps = await readFileLines(config.webcacheConfPath + "regex_deny_acl.conf");
    conf.setBlacklistRegexpList(blackRegexps);

    // Memory usage
    let cacheMem = {};
    lines = await readFileLines(config.webcacheConfPath + "squid_mem.conf");
    for (line of lines) {
      let [key, ...values] = line.split(' ');
      switch (key) {
        case 'minimum_object_size':
        case 'maximum_object_size':
        case 'maximum_object_size_in_memory':
        case 'minimum_object_size':
        case 'cache_mem':
          let [size, unit] = values;
          if (!isNumber(size)) break;
          cacheMem[key] = parseFloat(size);
          break;

        case 'cache_dir':
          if (values.length !== 5) break;
          if (!isNumber(values[2])) break;
          cacheMem['disk_size'] = parseInt(values[2]);
          break;

        default:
          break;
      }
    }
    conf.setMemorySize(cacheMem.cache_mem);
    conf.setMinObject(cacheMem.minimum_object_size);
    conf.setMaxObject(cacheMem.maximum_object_size);
    conf.setMaxObjectRam(cacheMem.maximum_object_size_in_memory);
    conf.setDiskSize(cacheMem.disk_size);

    return conf;
  }

  /**
   * @returns {Promise<messages.WebcacheConfResponse>}
   */
  async _getWebcacheConfig() {
    let result = new messages.WebcacheConfResponse();
    let conf = await this._parseWebcachConfig();
    result.setConfig(conf);
    return result;
  }  

  /**
   * @param {messages.WebcacheConfig} conf
   * @returns {Promise<messages.WebcacheConfResponse>}
   */
  async _setWebcacheConfig(conf) {
    let result = new messages.WebcacheConfResponse();
    let defaultComment = "## This is dummy entry, to prevent warnings. Do not remove."
    let item;

    // Allowed Subnets
    let subnetLines = [defaultComment];
    for (item of conf.getAllowedSubnetList()) {
      if (validator.isIP(item, 4)) {
        subnetLines.push("acl localnet src " + item + '/32');
      } else if (!validator.isIPRange(item)) {
        throw new ValidationError("allowedSubnetList", "Invalid IP mask.", ValidationCode.INVALID_TYPE);
      } else {
        subnetLines.push("acl localnet src " + item);
      }
    }
    subnetLines.push("");

    // SSL Servers
    let sslServerLines = [defaultComment];
    for (item of conf.getSslServerList()) {
      if (!validator.isIPRange(item))
        throw new ValidationError("sslServerList", "Invalid IP mask.", ValidationCode.INVALID_TYPE);
      subnetLines.push(item);
    }
    sslServerLines.push("");

    // Blacklist
    let blackDomains = [defaultComment];
    for (item of conf.getBlacklistUrlList()) {
      if (!validator.isFQDN(item.replace(/^\./, '')))
        throw new ValidationError("blacklistUrlList", "Invalid domain name.", ValidationCode.INVALID_TYPE);
      blackDomains.push(item);
    }
    blackDomains.push("");

    let blackIps = [defaultComment];
    for (item of conf.getBlacklistIpList()) {
      if (!validator.isIPRange(item))
        throw new ValidationError("blacklistIpList", "Invalid IP mask.", ValidationCode.INVALID_TYPE);
      blackIps.push(item);
    }
    blackIps.push("");

    let blackRegexps = [defaultComment];
    for (item of conf.getBlacklistRegexpList()) {
      try {
        let tmpRegexp = new RegExp(item);
      } catch (err) {
        throw new ValidationError("blacklistRegexpList", "Invalid regexp.", ValidationCode.INVALID_TYPE);
      }
      blackRegexps.push(item);
    }
    blackRegexps.push("");

    // Disk and memory usage
    let memLines = [];
    let diskSize = conf.getDiskSize();
    let memSize = conf.getMemorySize();
    let minObject = conf.getMinObject();
    let maxObject = conf.getMaxObject();
    let maxObjectRam = conf.getMaxObjectRam();
    memLines.push(`cache_mem ${memSize ? memSize : 200} MB`);
    memLines.push(`minimum_object_size ${minObject ? minObject : 12} KB`);
    memLines.push(`maximum_object_size ${maxObject ? maxObject : 32768} KB`);
    memLines.push(`maximum_object_size_in_memory ${maxObjectRam ? maxObjectRam : 128} KB`);
    memLines.push(`cache_dir aufs /wanos/webcache/var/cache/squid ${diskSize ? diskSize : 128} 16 256`);
    memLines.push("");

    await writeFileLines(config.webcacheConfPath + 'regex_deny_acl.conf', blackRegexps);
    await writeFileLines(config.webcacheConfPath + 'squid_acl.conf', subnetLines);
    await writeFileLines(config.webcacheConfPath + 'ssl_acl.conf', sslServerLines);
    await writeFileLines(config.webcacheConfPath + 'domain_deny_acl.conf', blackDomains);
    await writeFileLines(config.webcacheConfPath + 'ip_deny_acl.conf', blackIps);
    await writeFileLines(config.webcacheConfPath + 'squid_mem.conf', memLines);

    await WanosScriptManager.reconfigureWebcache();

    result.setConfig(conf);
    return result;
  }

  /*
   * @returns {Promise<messages.PathGatewaysResponse>}
   */
  async _getPathGateways() {
    let result = new messages.PathGatewaysResponse();
    let primaryGw = new messages.PathGateway();
    let secondaryGw = new messages.PathGateway();
    primaryGw.setPrimary(true);
    primaryGw.setAddress(this._wanosConf.config.WARP_PRIMARY_GW);
    primaryGw.setLatency(this._wanosConf.config.WARP_TRACK_LINKA_RTT);
    secondaryGw.setPrimary(false);
    secondaryGw.setAddress(this._wanosConf.config.WARP_SECONDARY_GW);
    secondaryGw.setLatency(this._wanosConf.config.WARP_TRACK_LINKB_RTT);
    result.setPathsList([primaryGw, secondaryGw]);
    return result;
  }

  /**
   * @param {bool} isPrimary
   * @returns {Promise<messages.PathGatewaysResponse>}
   */
  async _removePathGateway(isPrimary) {
    await WanosScriptManager.removePathGateway(isPrimary);

    await this._wanosConf.loadConfig();

    return this._getPathGateways();
  }

  /**
   * @returns {Promise<messages.PathConfigResponse>}
   */
  async _getPathConfig() {
    let result = new messages.PathConfigResponse();
    let config = new messages.PathConfig();
    config.setMultiWan(this._wanosConf.config.WARP_MULTIWAN);
    config.setFailOver(this._wanosConf.config.WARP_FAIL_OVER);
    config.setPreempt(this._wanosConf.config.WARP_PREEMPT);
    config.setTimeout(this._wanosConf.config.WARP_TIMEOUT);
    config.setTrackPeer(this._wanosConf.config.WARP_TRACK_PEER);
    result.setConfig(config);
    return result;
  }

  /**
   * @param {messages.PathConfig} newConfig
   * @returns {Promise<messages.PathConfigResponse>}
   */
  async _setPathConfig(config) {
    if (config.getMultiWan()) {
      if (!this._wanosConf.config.WARP_PRIMARY_GW || !this._wanosConf.config.WARP_SECONDARY_GW) {
        throw new InvalidArgumentError("multiWan", "Invalid gateway configuration.");
      }
    }

    //trackPeer is optional and we validates format when its value is set.
    if (config.getTrackPeer() && !validator.isIP(config.getTrackPeer(), 4))
      throw new InvalidArgumentError("trackPeer", "Invalid IP format.");

    await WanosScriptManager.setPathConfig(config.toObject());

    await this._wanosConf.loadConfig();

    return this._getPathConfig();
  }

  /**
   * @param {messages.TrafficPolicy} trafficPolicy
   * @returns {Promise<messages.TrafficPolicyAdd>}
   */
  async _addTrafficPolicy(policy) {
    let policies = await this._parseTrafficPoliciesFile();

    if (policies.find(x => x.getRuleId() === policy.getRuleId())) {
      throw new ValidationError("ruleId", "Rule number already exists.", ValidationCode.UNIQUE);
    }
    if (policy.getRuleId() <= 0) {
      throw new ValidationError("ruleId", "Rule number should be between 1 - 1000.", ValidationCode.MIN_RANGE);
    }
    if (policy.getRuleId() > 1000) {
      throw new ValidationError("ruleId", "Rule number should be between 1 - 1000.", ValidationCode.MAX_RANGE);
    }

    // Set default values for settings like blocking etc.
    this._sanitizeTrafficPolicy(policy);
    // Check if the matcher is valid
    this._validatesTrafficPolicyMatch(policy);
    // Check if the QoS action is consistent with this group
    this._validateTrafficPolicyClass(policy, policies);
    // Add the new policy and sort by rule ID
    policies.push(policy);
    policies.sort((a, b) => a.getRuleId() - b.getRuleId());

    let lines = [];
    for (let item of policies) {
      let formattedPolicy = this._formatTrafficPolicy(item.toObject());
      let proto = `${formattedPolicy.proto} ${formattedPolicy.port}`.trim();
      lines.push(`${formattedPolicy.ruleId}=${formattedPolicy.source},${formattedPolicy.destination},${proto},${formattedPolicy.dscp},${formattedPolicy.group},${formattedPolicy.action},${formattedPolicy.rate},${formattedPolicy.bypass},${formattedPolicy.gateway}`);
    }
    lines.push("");
    await writeFileLines(config.trafficPoliciesFile, lines);
    let result = new messages.TrafficPolicyAdd();
    result.setPolicy(policy);
    return result;
  }

  /**
   * @param {messages.TrafficPolicy} policy
   * @returns {Promise<messages.TrafficPolicyUpdate>}
   */
  async _updateTrafficPolicy(policy) {
    let policies = await this._parseTrafficPoliciesFile();
    // Check if the matcher is valid
    this._validatesTrafficPolicyMatch(policy);
    // Set default values for stuff like blocking etc.
    this._sanitizeTrafficPolicy(policy);

    let existingPolicyIndex = policies.findIndex(x => x.getRuleId() === policy.getRuleId());
    if (existingPolicyIndex < 0) {
      throw new InvalidArgumentError("ruleId", "Policy not found.");
    }

    // Delete the existing policy from the array
    policies.splice(existingPolicyIndex, 1);
    // Check if the QoS action is consistent with this group
    this._validateTrafficPolicyClass(policy, policies);
    // Add the updated policy and sort by rule ID
    policies.splice(existingPolicyIndex, 0, policy);
    policies.sort((a, b) => a.getRuleId() - b.getRuleId());

    let lines = [];
    for (let item of policies) {
      let formattedPolicy = this._formatTrafficPolicy(item.toObject());
      let proto = `${formattedPolicy.proto} ${formattedPolicy.port}`.trim();
      lines.push(`${formattedPolicy.ruleId}=${formattedPolicy.source},${formattedPolicy.destination},${proto},${formattedPolicy.dscp},${formattedPolicy.group},${formattedPolicy.action},${formattedPolicy.rate},${formattedPolicy.bypass},${formattedPolicy.gateway}`);
    }
    lines.push("");
    await writeFileLines(config.trafficPoliciesFile, lines);
    let result = new messages.TrafficPolicyUpdate();
    return result;
  }

  _validatesTrafficPolicyMatch(policy) {
    let matcher = policy.getMatch();

    if (validator.isIPRange(matcher.getSource()) !== true) {
      throw new ValidationError("match.source", "Invalid format.", ValidationCode.INVALID_TYPE);
    }

    if (validator.isIPRange(matcher.getDestination()) !== true) {
      throw new ValidationError("match.destination", "Invalid format.", ValidationCode.INVALID_TYPE);
    }

    switch (matcher.getType()) {
      case '':
        // match type should be selected
        throw new ValidationError("match.type", "Required field.", ValidationCode.REQUIRED);
        break;

      case 'application':
        // the list of application should be provided for application matcher
        if ((matcher.getApplicationList() || []).length === 0) {
          throw new ValidationError("match.applicationList", "Required field.", ValidationCode.REQUIRED);
        }
        break;

      case 'protocol':
        // the protocol should be provided
        if (!matcher.getKind()) {
          throw new ValidationError("match.kind", "Required field.", ValidationCode.REQUIRED); 
        }

        // the protocol should be one of [tcp, udp, src tcp, dst tcp, src udp, dst udp]
        if (!matcher.getKind().match(/^((src|dst)\s)?(tcp|udp)$/)) {
          throw new ValidationError("match.kind", "Invalid value.", ValidationCode.ENUM);
        }

        // port number is optional
        let port = matcher.getProtocolValue();
        if (port) {
          // port number/range should be single number or range using dash with comma separated format.
          if (validator.matches(port, /^\d+\-\d+$/)) {
            let [start, stop] = port.split('-');
            if (!validator.isPort(start) || !validator.isPort(stop) || parseInt(start) >= parseInt(stop)) {
              throw new ValidationError("match.protocolValue", "Invalid port range.", ValidationCode.INVALID_TYPE);
            }
          } else {
            if (port.split(',').find(x => !validator.isPort(x))) {
              throw new ValidationError("match.protocolValue", "Invalid port range.", ValidationCode.INVALID_TYPE);
            }
          }
        }
        break;

      case 'dscp':
        // the list of dscp is optional
        break;

      default:
        throw new ValidationError("match.type", "Invalid value.", ValidationCode.ENUM);
        break;
    }
  }

  /**
   * @param {messages.TrafficPolicy} newPolicy
   * @param {messages.TrafficPolicy[]} existingPolicies
   * Check if the QoS action is consistent with this group
   */
  _validateTrafficPolicyClass(newPolicy, existingPolicies) {
    let group = newPolicy.getAction().getGroup();
    let groupPolicy = existingPolicies.find(x => x.getAction().getGroup() === group);
    if (groupPolicy) {
      let groupAction = groupPolicy.getAction().getDeny() ? "block" : groupPolicy.getAction().getQos() || "-";
      let policyAction = newPolicy.getAction().getDeny() ? "block" : newPolicy.getAction().getQos() || "-";
      if (policyAction !== groupAction) {
        throw new ValidationError("action.qos", `New QoS action ${policyAction} is not consistent with the previously defined action ${groupAction} for class ${group}. ` +
          "When policies are grouped together in the same class, they share a single common action.", ValidationCode.COMPARE);
      } else {
        let groupRate = groupPolicy.getAction().getRate();
        let policyRate = newPolicy.getAction().getRate();
        if (policyRate !== groupRate) {
          throw new ValidationError("action.rate", `New Shape Rate ${policyRate} is not consistent with the previously defined shape rate ${groupRate} for class ${group}. ` +
            "When policies are grouped together in the same class, they share a single common action.", ValidationCode.COMPARE);
        }
      }
    }
  }

  /**
   * @param {messages.TrafficPolicy} policy
   */
  _sanitizeTrafficPolicy(policy) {
    if (policy.getAction().getQos() === "shape") {
      let rate = policy.getAction().getRate();
      if (rate < 8) {
        rate = 8;
      } else if (rate > 1000000) {
        rate = 1000000;
      }
      policy.getAction().setRate(rate);
    }

    if (policy.getAction().getDeny()) {
      policy.getAction().setQos("");
      policy.getAction().setGroup(19);
      policy.getAction().setDscp("");
      policy.getAction().setBypass(true);
      policy.getAction().setRate(0);
      policy.getAction().setGateway("");
    }
  }

  /**
   * @param {messages.TrafficPolicy.AsObject} policy
   * @returns {Object}
   */
  _formatTrafficPolicy(policy) {
    let format = {
      ruleId: policy.ruleId,
      source: policy.match.source,
      destination: policy.match.destination,
      dscp: policy.action.dscp || "-",
      action: policy.action.deny ? "block" : policy.action.qos || "-",
      gateway: policy.action.gateway || "-",
      group: policy.action.group,
      bypass: policy.action.bypass,
      rate: policy.action.rate || "-",
      proto: "",
      port: ""
    };

    switch (policy.match.type) {
      case "application": {
        format.proto = "dpi";
        format.port = policy.match.applicationList.join(" or ");
        break;
      }
      case "dscp": {
        format.proto = "dscp";
        format.port = policy.match.dscpList.join(" or ");
        break;
      }
      case "protocol": {
        format.proto = policy.match.kind;
        if (policy.match.protocolValue === "") {
          format.port = "";
        } else if (policy.match.protocolValue.includes("-")) {
          // Range value e.g. "1000-1200"
          let portRange = policy.match.protocolValue.split("-").map(x => parseInt(x));
          if (portRange.length !== 2) {
            throw new ValidationError("match.protocolValue", "Invalid port range.", ValidationCode.INVALID_TYPE);
          }
          format.port = `port > ${portRange[0] - 1} and < ${portRange[1] + 1}`;
        } else {
          // Either single port of comma separated list
          format.port = `port ${policy.match.protocolValue.split(",").map(x => x.trim()).join(" or ")}`;
        }
        break;
      }
    }

    return format;
  }

  /**
   * @param {number} ruleId
   * @returns {Promise<messages.TrafficPolicyDelete>}
   */
  async _deleteTrafficPolicy(ruleId) {
    let lines = await readFileLines(config.trafficPoliciesFile);
    let count = lines.length;
    lines = lines.filter(x => !x.startsWith(`${ruleId}=`));
    if (count - lines.length !== 1) {
      throw new InvalidArgumentError("ruleId", "Invalid rule ID.");
    }
    await writeFileLines(config.trafficPoliciesFile, lines);
    let result = new messages.TrafficPolicyDelete();
    return result;
  }

  /**
   * @returns {Promise<messages.TrafficPolicies>}
   */
  async _getTrafficPolicies() {
    let gatewayList = [];
    if (this._wanosConf.config.WARP_MULTIWAN) {
      if (this._wanosConf.config.WARP_PRIMARY_GW !== "") {
        let gateway = new messages.TrafficPolicyGateway();
        gateway.setValue("primary");
        gateway.setText(`Primary ${this._wanosConf.config.WARP_PRIMARY_GW}`);
        gatewayList.push(gateway);
      }
      if (this._wanosConf.config.WARP_SECONDARY_GW !== "") {
        let gateway = new messages.TrafficPolicyGateway();
        gateway.setValue("secondary");
        gateway.setText(`Secondary ${this._wanosConf.config.WARP_SECONDARY_GW}`);
        gatewayList.push(gateway);
      }
    }
    let policyList = await this._parseTrafficPoliciesSorted();
    let data = new messages.TrafficPoliciesData();
    data.setPolicyList(policyList);
    data.setGatewayList(gatewayList);
    let result = new messages.TrafficPolicies();
    result.setPolicies(data);
    return result;
  }

  /**
   * @returns {Promise<messages.TrafficPolicy[]>}
   */
  async _parseTrafficPoliciesSorted() {
    let policies = [];

    // First parse the default policies
    let i = -100;
    let lines = await readFileLines(config.groupObjectsFile);
    for (let line of lines) {
      let policy = new messages.TrafficPolicy();
      let [type, ports] = line.split("=").map(x => x.trim());
      policy.setReadonly(true);
      policy.setRuleId(i++);

      let policyMatch = new messages.TrafficPolicyMatch();
      policyMatch.setSource("0.0.0.0/0");
      policyMatch.setDestination("0.0.0.0/0");
      policyMatch.setType(type);
      policyMatch.setKind("tcp");
      policyMatch.setProtocolValue(ports.replace(/ /g, ""));
      policy.setMatch(policyMatch);

      let policyAction = new messages.TrafficPolicyAction();
      policyAction.setBypass(true);
      if (type === "interactive") {
        policyAction.setGroup(17);
        policyAction.setQos("high");
      }
      policy.setAction(policyAction);

      policies.push(policy);
    }

    // Now add the policies defined in the traffic policies file
    let policiesFromFile = await this._parseTrafficPoliciesFile();
    policies.push(...policiesFromFile);

    // And finally add the default catch all policy
    let policy = new messages.TrafficPolicy();
    policy.setReadonly(true);
    policy.setRuleId(TrafficPoliciesCatchAllId);

    let policyMatch = new messages.TrafficPolicyMatch();
    policyMatch.setSource("0.0.0.0/0");
    policyMatch.setDestination("0.0.0.0/0");
    policy.setMatch(policyMatch);

    let policyAction = new messages.TrafficPolicyAction();
    policyAction.setBypass(true);
    policy.setAction(policyAction);

    policies.push(policy);
    policies.sort((a, b) => a.getRuleId() - b.getRuleId());
    return policies;
  }

  /**
   * @returns {Promise<messages.TrafficPolicy[]>}
   */
  async _parseTrafficPoliciesFile() {
    let policies = [];
    let lines = await readFileLines(config.trafficPoliciesFile);
    for (let line of lines) {
      let policy = new messages.TrafficPolicy();

      let [ruleId, data] = line.split("=").map(x => x.trim());
      policy.setRuleId(parseInt(ruleId));
      if (TrafficPoliciesReadonlyIds.includes(policy.getRuleId()) || policy.getRuleId() < 0) {
        policy.setReadonly(true);
      }

      let [source, destination, proto, dscp, group, action, rate, bypass, path] = data.split(",").map(x => x.trim());

      let match = new messages.TrafficPolicyMatch();
      match.setSource(source);
      match.setDestination(destination);
      // Parse type, kind and values
      match.setKind("");
      if (proto.startsWith("dpi")) {
        // DPI rule
        let dpiData = proto.replace("dpi ", "");
        let applicationList = dpiData.split(" or ").map(x => parseInt(x));
        match.setType("application");
        match.setApplicationList(applicationList);
      } else if (proto.startsWith("dscp")) {
        // DSCP rule
        let dscpData = proto.replace("dscp ", "");
        let dscpList = dscpData.split(" or ");
        match.setType("dscp");
        match.setDscpList(dscpList);
      } else {
        // TCP or UDP rule
        let kind = "";
        let protocolValue = "";
        for (let kindOption of TrafficPoliciesKindOptions) {
          if (proto.startsWith(kindOption)) {
            kind = kindOption;
            break;
          }
        }
        if (kind === "") {
          this._throwParseError(`Invalid traffic policy line: ${line}`);
        }
        if (proto !== kind) {
          let protocolData = proto.replace(`${kind} port `, "");
          if (protocolData.startsWith(">")) {
            // This should be a range entry eg: ">= 1000 and <= 1500"
            let portRange = protocolData.replace(/> | </g, "").split(" and ").map(x => parseInt(x));
            if (portRange.length !== 2) {
              this._throwParseError(`Invalid traffic policy line: ${line}`);
            }
            // Adjust to reflect range. We log a range using > and <, so 1000-2000 will be written as > 999 and < 2001
            protocolValue = `${portRange[0] + 1}-${portRange[1] - 1}`;
          } else {
            // This should be either a single port or a list of OR ports eg: "1000 or 1100"
            protocolValue = protocolData.split(" or ").join(",");
          }
        }
        match.setType("protocol");
        match.setKind(kind);
        match.setProtocolValue(protocolValue);
      }
      policy.setMatch(match);

      let policyAction = new messages.TrafficPolicyAction();
      if (dscp !== "-") {
        policyAction.setDscp(dscp);
      }
      if (group !== "-") {
        policyAction.setGroup(parseInt(group));
      }
      if (action != "-") {
        switch (action) {
          case "block":
            policyAction.setDeny(true);
            break;
          case "shape":
            policyAction.setQos("shape");
            policyAction.setRate(parseInt(rate));
            break;
          case "high":
            policyAction.setQos("high");
            break;
          case "low":
            policyAction.setQos("low");
            break;
        }
      }
      if (bypass === "true") {
        policyAction.setBypass(true);
      }
      if (path !== "-") {
        policyAction.setGateway(path);
      }
      policy.setAction(policyAction);
      policies.push(policy);
    }
    return policies;
  }

  _throwParseError(message) {
    let rpcError = new messages.Error();
    rpcError.setCode(ErrorCode.UNKNOWN);
    rpcError.setMessage(message);
    throw new RpcError(rpcError);
  }

  _validatesTunnelPolicy(rules, newRule) {
    if (newRule.getTunnelId() === 0) {
      newRule.setPeerIp("");
      newRule.setSharedKey("");
    } else {
      if (newRule.getPeerIp() === "Not Tunneled")
        newRule.setPeerIp("");

      if (!newRule.getPeerIp()) {
        throw new ValidationError("peerIp", "is required.", ValidationCode.REQUIRED);
      } else if (validator.isIP(newRule.getPeerIp(), 4)) {
        throw new ValidationError("peerIp", "Invalid format.", ValidationCode.INVALID_TYPE);
      }

      if (newRule.getSharedKey()) {
        if (newRule.getSharedKey().length !== 35) {
          throw new ValidationError("sharedKey", "Invalid format.", ValidationCode.INVALID_TYPE);
        }

        if (rules.find(x => x.getTunnelId() === newRule.getTunnelId() && 
          x.getSharedKey() != newRule.getSharedKey()))
        {
          throw new ValidationError("sharedKey", "is missmatching with existing one.", ValidationCode.UNIQUE);
        }

        if (rules.find(x => x.getTunnelId() !== newRule.getTunnelId() && 
          x.getSharedKey().slice(0, 3) === newRule.getSharedKey().slice(0, 3)))
        {
          throw new ValidationError("sharedKey", "is duplicated SPI.", ValidationCode.UNIQUE);
        }
      }
    }    

    if (this._wanosConf.config.ENCAPPROTO === "ipsec") {
      if (!newRule.getSharedKey() && newRule.getPeerIp()) {
        throw new ValidationError("sharedKey", "is required.", ValidationCode.INVALID_TYPE);
      }
    }

    if (!newRule.getDestination())
      newRule.setDestination("0.0.0.0/0");

    if (!validator.isIPRange(newRule.getDestination())) {
      throw new ValidationError("destination", "Invalid destination.", ValidationCode.INVALID_TYPE);
    }

    if (!validator.getDescription().match(/^[^,]+$/)) {
      throw new ValidationError("description", "Invalid description, can not include comma.", ValidationCode.INVALID_TYPE);
    }
  }

  /**
   * @param {messages.TunnelRule} rule
   * @returns {Promise<messages.TunnelPoliciesAddRule>}
   */
  async _addTunnelPoliciesRule(newRule) {
    let rules = await this._getTunnelRulesSorted();

    this._validatesTunnelPolicy(rules, newRule);

    let newRuleId = 1;
    let index = rules.length;
    for (let i = 0; i < rules.length; i++) {
      if (newRuleId !== rules[i].getRuleId()) {
        index = i;
        break;
      }
      newRuleId++;
    }

    // Assign the new rule ID to the new rule.
    newRule.setRuleId(newRuleId);

    // Insert the new rule into its sorted position in the rule list.
    rules.splice(index, 0, newRule);

    let lines = [];
    for (let rule of rules) {
      let tunnelId = rule.getTunnelId();
      if (rule.getTunnelId() === 0) {
        rule.setPeerIp("");
        rule.setSharedKey("");
        tunnelId = "-";
      }
      lines.push(`${rule.getRuleId()}=${rule.getDestination()},${tunnelId},${rule.getDescription()},${rule.getPeerIp()},${rule.getSharedKey()}`);
    }
    // Save the rules
    await writeFileLines(config.tunnelPoliciesFile, lines);
    let result = new messages.TunnelPoliciesAddRule();
    result.setRule(newRule);
    return result;
  }

  /**
   * @param {messages.TunnelRule.AsObject} rule
   * @returns {Promise<messages.TunnelPoliciesUpdateRule>}
   */
  async _updateTunnelPoliciesRule(rule) {
    let tunnelId = rule.tunnelId;
    let rules = await this._getTunnelRulesSorted();
    this._validatesTunnelPolicy(rules, rule);
    let lines = await readFileLines(config.tunnelPoliciesFile);
    let ruleFound = false;
    for (let i = 0; i < lines.length; i++) {
      if (!lines[i].startsWith(`${rule.ruleId}=`)) {
        continue;
      }
      lines[i] = `${rule.ruleId}=${rule.destination},${tunnelId},${rule.description},${rule.peerIp},${rule.sharedKey}`;
      ruleFound = true;
      break;
    }
    if (!ruleFound) {
      throw new InvalidArgumentError("ruleId", "Rule not found.");
    }
    await writeFileLines(config.tunnelPoliciesFile, lines);
    let result = new messages.TunnelPoliciesUpdateRule();
    return result;
  }

  /**
   * @param {number} ruleId
   * @returns {Promise<messages.TunnelPoliciesDeleteRule>}
   */
  async _deleteTunnelPoliciesRule(ruleId) {
    let lines = await readFileLines(config.tunnelPoliciesFile);
    let count = lines.length;
    lines = lines.filter(x => !x.startsWith(`${ruleId}=`));
    if (count - lines.length !== 1) {
      throw new InvalidArgumentError("ruleId", "Invalid rule ID.");
    }
    await writeFileLines(config.tunnelPoliciesFile, lines);
    let result = new messages.TunnelPoliciesDeleteRule();
    return result;
  }

  /**
   * @returns {Promise<messages.TunnelPolicies>}
   */
  async _getTunnelPolicies() {
    let rules = await this._getTunnelRulesSorted();
    let requireKey = false;
    if (this._wanosConf.config.ENCAPPROTO === "ipsec") {
      requireKey = true;
    }

    let policies = new messages.TunnelPoliciesData();
    policies.setRequirekey(requireKey);
    policies.setRuleList(rules);

    let result = new messages.TunnelPolicies();
    result.setPolicies(policies);
    return result;
  }

  async _getTunnelRulesSorted() {
    let rules = [];
    let lines = await readFileLines(config.tunnelPoliciesFile);
    for (let line of lines) {
      let [ruleId, data] = line.split("=").map(x => x.trim());
      let rule = new messages.TunnelRule();
      rule.setRuleId(parseInt(ruleId));
      let [destination, tunnelId, description, peerIp, sharedKey] = data.split(",").map(x => x.trim());
      rule.setDestination(destination);
      if (tunnelId === "-") {
        rule.setTunnelId(0);
      } else {
        rule.setTunnelId(parseInt(tunnelId));
      }
      if (description) {
        rule.setDescription(description);
      }
      if (tunnelId === "-") {
        rule.setPeerIp("Not Tunneled");
      } else if (peerIp) {
        rule.setPeerIp(peerIp);
      }
      if (sharedKey) {
        rule.setSharedKey(sharedKey);
      }
      rules.push(rule);
    }
    rules.sort((a, b) => a.getRuleId() - b.getRuleId());
    return rules;
  }

  /**
   * @param {messages.MonitorSettingsData.AsObject} monitorSettings
   * @returns {Promise<messages.MonitorSettings>}
   */
  async _updateMonitorSettings(monitorSettings) {
    let settings = monitorSettings;
    settings.netflowPort = settings.netflowPort > 0 ? settings.netflowPort : this._wanosConf.config.NFPEERPORT;

    let reconfigure = false;
    let softReconfigure = true;

    if (settings.snmp !== this._wanosConf.config.SNMPD) {
      await WanosScriptManager.makeWanosCfgScript(`-snmpd ${settings.snmp}`);
    }

    if (settings.netflowExporting !== this._wanosConf.config.NFEXPORT || settings.netflowPort !== this._wanosConf.config.NFPEERPORT) {
      let mtu = this._wanosConf.config.MTU;
      let peerTimeout = this._wanosConf.config.HOLD;
      let nfExpire = this._wanosConf.config.NFEXPIRE;
      let nfExport = settings.netflowExporting ? "Enable" : "Disable";
      await WanosScriptManager.makeWanosCfgScript(`-settings ${mtu} ${peerTimeout} ${nfExpire} ${settings.netflowPort} ${nfExport}`);
    }

    if (settings.netflowIp !== this._wanosConf.config.NFPEERIP) {
      await WanosScriptManager.makeWanosCfgScript(`-nfpeerip ${settings.netflowIp}`);
    }

    if (reconfigure) {
      if (softReconfigure) {
        WanosScriptManager.makeWanosCfgScriptSoftReconfigure();
      } else {
        WanosScriptManager.makeWanosCfgScriptReconfigure();
      }
    }

    let result = new messages.MonitorSettings();
    return result;
  }

  /**
   * @returns {Promise<messages.MonitorSettings>}
   */
  _getMonitorSettings() {
    let self = this;
    return new Promise(function(resolve, reject) {
      try {
        let settings = new messages.MonitorSettingsData();
        settings.setSnmp(self._wanosConf.config.SNMPD);
        settings.setNetflowExporting(self._wanosConf.config.NFEXPORT);
        settings.setNetflowIp(self._wanosConf.config.NFPEERIP);
        let netflowPort = self._wanosConf.config.NFPEERPORT;
        settings.setNetflowPort(netflowPort ? netflowPort : 0);

        let result = new messages.MonitorSettings();
        result.setSettings(settings);
        resolve(result);
      } catch (err) {
        reject(err);
      }
    });
  }

  /**
   * @param {messages.OptimizationSettingsData.AsObject} optimizationSettings
   * @returns {Promise<messages.OptimizationSettings>}
   */
  async _updateOptimizationSettings(optimizationSettings) {
    let settings = optimizationSettings;

    let reconfigure = false;
    let softReconfigure = true;

    if (settings.peerTimeout > 86400) {
      settings.peerTimeout = 86400;
    }
    if (settings.peerTimeout !== this._wanosConf.config.HOLD) {
      reconfigure = true;
      let mtu = this._wanosConf.config.MTU;
      let nfExpire = this._wanosConf.config.NFEXPIRE;
      let nfPeerPort = this._wanosConf.config.NFPEERPORT;
      let nfExport = this._wanosConf.config.NFEXPORT;
      await WanosScriptManager.makeWanosCfgScript(`-settings ${mtu} ${settings.peerTimeout} ${nfExpire} ${nfPeerPort} ${nfExport}`);
    }

    if (settings.wanRate !== this._wanosConf.config.SIM) {
      reconfigure = true;
      await WanosScriptManager.makeWanosCfgScript(`-sys ${this._wanosConf.config.MODE} ${settings.wanRate}`);
    }

    if (settings.compression !== this._wanosConf.config.COMP_LEVEL) {
      reconfigure = true;
      await WanosScriptManager.makeWanosCfgScript(`-comp_lvl ${settings.compression}`);
    }

    if (settings.deduplication !== this._wanosConf.config.DD_LEVEL) {
      reconfigure = true;
      softReconfigure = false;
      await WanosScriptManager.makeWanosCfgScript(`-dd_lvl ${settings.deduplication}`);
    }

    if (settings.lossRecovery !== this._wanosConf.config.RSP_LEVEL) {
      reconfigure = true;
      await WanosScriptManager.makeWanosCfgScript(`-rsp_lvl ${settings.lossRecovery}`);
    }

    if (settings.errorCorrection !== this._wanosConf.config.FEC_GROUP_SIZE) {
      reconfigure = true;
      await WanosScriptManager.makeWanosCfgScript(`-fec_lvl ${settings.errorCorrection}`);
    }

    if (settings.aggregation !== this._wanosConf.config.STACKER_WAIT_TIME_MS) {
      reconfigure = true;
      await WanosScriptManager.makeWanosCfgScript(`-stacker_lvl ${settings.aggregation}`);
    }

    if (settings.accelerator !== this._wanosConf.config.PEP_TCP_ACCELERATOR) {
      reconfigure = true;
      await WanosScriptManager.makeWanosCfgScript(`-tcpx ${settings.accelerator}`);
    }

    if (settings.webcache !== this._wanosConf.config.HTTP_CACHE_REDIRECT) {
      reconfigure = true;
      await WanosScriptManager.makeWanosCfgScript(`-webcache ${settings.webcache}`);
    }

    if (reconfigure) {
      if (softReconfigure) {
        WanosScriptManager.makeWanosCfgScriptSoftReconfigure();
      } else {
        WanosScriptManager.makeWanosCfgScriptReconfigure();
      }
    }

    let result = new messages.OptimizationSettings();
    return result;
  }

  /**
   * @returns {Promise<messages.OptimizationSettings>}
   */
  _getOptimizationSettings() {
    let self = this;
    return new Promise(function(resolve, reject) {
      try {
        let settings = new messages.OptimizationSettingsData();
        settings.setPeerTimeout(self._wanosConf.config.HOLD);
        settings.setWanRate(self._wanosConf.config.SIM);
        settings.setCompression(self._wanosConf.config.COMP_LEVEL);
        settings.setDeduplication(self._wanosConf.config.DD_LEVEL);
        settings.setLossRecovery(self._wanosConf.config.RSP_LEVEL);
        settings.setErrorCorrection(self._wanosConf.config.FEC_GROUP_SIZE);
        settings.setAggregation(self._wanosConf.config.STACKER_WAIT_TIME_MS);
        settings.setAccelerator(self._wanosConf.config.PEP_TCP_ACCELERATOR);
        settings.setWebcache(self._wanosConf.config.HTTP_CACHE_REDIRECT);

        let result = new messages.OptimizationSettings();
        result.setSettings(settings);
        resolve(result);
      } catch (err) {
        reject(err);
      }
    });
  }

  /**
   * @param {messages.NetworkSettingsData.AsObject} networkSettings
   * @returns {Promise<messages.NetworkSettings>}
   */
  async _updateNetworkSettings(networkSettings) {
    let settings = {
      ipMask: networkSettings.ipMask || `${this._wanosConf.config.IP}/${this._wanosConf.config.MASK}`,
      gateway: networkSettings.gateway || this._wanosConf.config.GW,
      deployment: networkSettings.deployment || this._wanosConf.config.DEPLOYMENT_MODE,
      encapsulation: networkSettings.encapsulation || this._wanosConf.config.ENCAPPROTO
    };

    let reconfigure = false;
    let softReconfigure = true;

    let [ip, mask] = settings.ipMask.trim().split("/");
    if (ip !== this._wanosConf.config.IP || parseInt(mask) !== this._wanosConf.config.MASK || settings.gateway !== this._wanosConf.config.GW) {
      reconfigure = true;
      softReconfigure = false;
      let netAddress = ipaddr.IPv4.networkAddressFromCIDR(settings.ipMask).toString();
      await WanosScriptManager.makeWanosCfgScript(`-net ${ip} ${mask} ${netAddress} ${settings.gateway}`);
    }

    if (settings.deployment !== this._wanosConf.config.DEPLOYMENT_MODE) {
      reconfigure = true;
      softReconfigure = false;
      await WanosScriptManager.makeWanosCfgScript(`-deployment ${settings.deployment}`);
    }

    if (settings.encapsulation !== this._wanosConf.config.ENCAPPROTO) {
      reconfigure = true;
      softReconfigure = false;
      await WanosScriptManager.makeWanosCfgScript(`-encapproto ${settings.encapsulation}`);
    }

    if (reconfigure) {
      if (softReconfigure) {
        WanosScriptManager.makeWanosCfgScriptSoftReconfigure();
      } else {
        WanosScriptManager.makeWanosCfgScriptReconfigure();
      }
    }

    let result = new messages.NetworkSettings();
    return result;
  }

  /**
   * @returns {Promise<messages.NetworkSettings>}
   */
  _getNetworkSettings() {
    let self = this;
    return new Promise(function(resolve, reject) {
      try {
        let settings = new messages.NetworkSettingsData();
        settings.setIpMask(`${self._wanosConf.config.IP}/${self._wanosConf.config.MASK}`);
        settings.setGateway(self._wanosConf.config.GW);
        settings.setDeployment(self._wanosConf.config.DEPLOYMENT_MODE);
        settings.setEncapsulation(self._wanosConf.config.ENCAPPROTO);

        let result = new messages.NetworkSettings();
        result.setSettings(settings);
        resolve(result);
      } catch (err) {
        reject(err);
      }
    });
  }

  /**
   * @param {messages.SystemSettingsData.AsObject} systemSettings
   * @returns {Promise<messages.SystemSettings>}
   */
  async _updateSystemSettings(systemSettings) {
    let currentDatastore = await WanosScriptManager.getDsDrive();
    let currentTimezone = await WanosScriptManager.getTimezone();
    let currentSsh = this._wanosConf.config.SSHD;
    let settings = {
      hostname: systemSettings.hostname || this._wanosConf.config.HOST,
      date: systemSettings.date,
      time: systemSettings.time,
      ntp: systemSettings.ntp || this._wanosConf.config.NTPD_SERVER,
      timezone: systemSettings.timezone || currentTimezone,
      ssh: systemSettings.ssh,
      datastore: systemSettings.datastore || currentDatastore,
      primary: systemSettings.primary || this._wanosConf.config.DNS_SERVER_1,
      secondary: systemSettings.secondary || this._wanosConf.config.DNS_SERVER_2,
      logLevel: systemSettings.logLevel || this._wanosConf.config.LOG_LEVEL
    };

    let reconfigure = false;
    let softReconfigure = true;

    if (settings.hostname !== this._wanosConf.config.HOST) {
      settings.hostname = settings.hostname
        .replace(/_/g, "-")
        .replace(/[^\-a-z0-9]/gi, "");
      if (settings.hostname === "") {
        settings.hostname = this._wanosConf.config.HOST;
      }
      if (settings.hostname === "") {
        settings.hostname = "wanos";
      }
      await WanosScriptManager.makeWanosCfgScript(`-host ${settings.hostname}`);
    }
    let time = null;
    if (settings.date.length > 0 && settings.time.length > 0) {
      time = new Date(`${settings.date}T${settings.time}`);
      await WanosScriptManager.makeWanosCfgScript(`-time ${time.getDate()} ${time.getMonth() + 1} ${time.getFullYear()} ${time.getHours()} ${time.getMinutes()}`);
    }
    if (settings.ntp !== this._wanosConf.config.NTPD_SERVER) {
      await WanosScriptManager.makeWanosCfgScript(`-ntpd ${settings.ntp}`);
    }
    if (settings.timezone !== currentTimezone) {
      await WanosScriptManager.makeWanosCfgScript(`-timezone ${settings.timezone}`);
    }
    if (settings.ssh !== currentSsh) {
      await WanosScriptManager.makeWanosCfgScript(`-sshd ${settings.ssh ? "enable" : "disable"}`);
    }
    if (settings.datastore !== currentDatastore && settings.datastore !== this._wanosConf.config.DSTORE) {
      reconfigure = true;
      softReconfigure = false;
      await WanosScriptManager.makeWanosCfgScript(`-dstore ${settings.datastore}`);
    }
    let setDns = false;
    if (settings.primary !== "" && settings.primary !== this._wanosConf.config.DNS_SERVER_1 && net.isIPv4(settings.primary)) {
      setDns = true;
    } else {
      settings.primary = "";
    }
    if (settings.secondary !== "" && settings.secondary !== this._wanosConf.config.DNS_SERVER_2 && net.isIPv4(settings.secondary)) {
      setDns = true;
    } else {
      settings.secondary = "";
    }
    if (setDns) {
      await WanosScriptManager.makeWanosCfgScript(`-dnsupdate ${settings.primary} ${settings.secondary}`);
    }
    let logLevelNumber = 1;
    switch (settings.logLevel) {
      case "debug":
        logLevelNumber = 0;
        break;
      case "info":
        logLevelNumber = 1;
        break;
      case "warn":
        logLevelNumber = 2;
        break;
      case "error":
        logLevelNumber = 3;
        break;
    }
    if (logLevelNumber !== this._wanosConf.config.LOG_LEVEL) {
      reconfigure = true;
      await WanosScriptManager.makeWanosCfgScript(`-log_level ${logLevelNumber}`);
    }

    if (reconfigure) {
      if (softReconfigure) {
        WanosScriptManager.makeWanosCfgScriptSoftReconfigure();
      } else {
        WanosScriptManager.makeWanosCfgScriptReconfigure();
      }
    }

    let result = new messages.SystemSettings();
    return result;
  }

  /**
   * @returns {Promise<messages.SystemSettings>}
   */
  async _getSystemSettings() {
    let systemSettings = new messages.SystemSettingsData();
    systemSettings.setHostname(this._wanosConf.config.HOST);
    systemSettings.setNtp(this._wanosConf.config.NTPD_SERVER);
    let timezone = await WanosScriptManager.getTimezone();
    systemSettings.setTimezone(timezone);
    systemSettings.setSsh(this._wanosConf.config.SSHD);
    let ds = await WanosScriptManager.getDsDrive();
    systemSettings.setDatastore(ds);
    systemSettings.setPrimary(this._wanosConf.config.DNS_SERVER_1);
    systemSettings.setSecondary(this._wanosConf.config.DNS_SERVER_2);
    let logLevels = ["debug", "info", "warn", "error"];
    let logLevelNumber = 1;
    if (isNumber(this._wanosConf.config.LOG_LEVEL)) {
      logLevelNumber = parseInt(this._wanosConf.config.LOG_LEVEL);
      if (logLevelNumber < 0 || logLevelNumber >= logLevels.length) {
        logLevelNumber = 1;
      }
    }
    systemSettings.setLogLevel(logLevels[logLevelNumber]);

    let datastores = await WanosScriptManager.getWanosFdiskList();
    let datastoreList = datastores.map(x => x.split(" ")[0]);

    let result = new messages.SystemSettings();
    result.setSettings(systemSettings);
    result.setDatastoreList(datastoreList);
    return result;
  }
}

class ConfigureRpcController {

  constructor(setupRpcCall, handleError, wanosConf) {
    this.setupRpcCall = setupRpcCall;
    this.handleError = handleError;
    this.configureReporter = new ConfigureReporter(wanosConf);
  }

  rpcGetSystemSettings() {
    const handleRequest = async () => {
      try {
        return await this.configureReporter.getSystemSettings();
      } catch (error) {
        return this.handleError(error, new messages.SystemSettings());
      }
    };
    this.setupRpcCall("getSystemSettings", handleRequest);
  }

  rpcUpdateSystemSettings() {
    const handleRequest = async (request) => {
      try {
        return await this.configureReporter.updateSystemSettings(request.getSettings());
      } catch (error) {
        return this.handleError(error, new messages.SystemSettings());
      }
    };
    this.setupRpcCall("updateSystemSettings", handleRequest);
  }

  rpcGetNetworkSettings() {
    const handleRequest = async () => {
      try {
        return await this.configureReporter.getNetworkSettings();
      } catch (error) {
        return this.handleError(error, new messages.NetworkSettings());
      }
    };
    this.setupRpcCall("getNetworkSettings", handleRequest);
  }

  rpcUpdateNetworkSettings() {
    const handleRequest = async (request) => {
      try {
        return await this.configureReporter.updateNetworkSettings(request.getSettings());
      } catch (error) {
        return this.handleError(error, new messages.NetworkSettings());
      }
    };
    this.setupRpcCall("updateNetworkSettings", handleRequest);
  }

  rpcGetOptimizationSettings() {
    const handleRequest = async () => {
      try {
        return await this.configureReporter.getOptimizationSettings();
      } catch (error) {
        return this.handleError(error, new messages.OptimizationSettings());
      }
    };
    this.setupRpcCall("getOptimizationSettings", handleRequest);
  }

  rpcUpdateOptimizationSettings() {
    const handleRequest = async (request) => {
      try {
        return await this.configureReporter.updateOptimizationSettings(request.getSettings());
      } catch (error) {
        return this.handleError(error, new messages.OptimizationSettings());
      }
    };
    this.setupRpcCall("updateOptimizationSettings", handleRequest);
  }

  rpcGetMonitorSettings() {
    const handleRequest = async () => {
      try {
        return await this.configureReporter.getMonitorSettings();
      } catch (error) {
        return this.handleError(error, new messages.MonitorSettings());
      }
    };
    this.setupRpcCall("getMonitorSettings", handleRequest);
  }

  rpcUpdateMonitorSettings() {
    const handleRequest = async (request) => {
      try {
        return await this.configureReporter.updateMonitorSettings(request.getSettings());
      } catch (error) {
        return this.handleError(error, new messages.MonitorSettings());
      }
    };
    this.setupRpcCall("updateMonitorSettings", handleRequest);
  }

  rpcGetTunnelPolicies() {
    const handleRequest = async () => {
      try {
        return await this.configureReporter.getTunnelPolicies();
      } catch (error) {
        return this.handleError(error, new messages.TunnelPolicies());
      }
    };
    this.setupRpcCall("getTunnelPolicies", handleRequest);
  }

  rpcDeleteTunnelPoliciesRule() {
    const handleRequest = async (request) => {
      try {
        return await this.configureReporter.deleteTunnelPoliciesRule(request.getRuleId());
      } catch (error) {
        return this.handleError(error, new messages.TunnelPoliciesDeleteRule());
      }
    };
    this.setupRpcCall("deleteTunnelPoliciesRule", handleRequest);
  }

  rpcUpdateTunnelPoliciesRule() {
    const handleRequest = async (request) => {
      try {
        return await this.configureReporter.updateTunnelPoliciesRule(request.getRule());
      } catch (error) {
        return this.handleError(error, new messages.TunnelPoliciesUpdateRule());
      }
    };
    this.setupRpcCall("updateTunnelPoliciesRule", handleRequest);
  }

  rpcAddTunnelPoliciesRule() {
    const handleRequest = async (request) => {
      try {
        return await this.configureReporter.addTunnelPoliciesRule(request.getRule());
      } catch (error) {
        return this.handleError(error, new messages.TunnelPoliciesAddRule());
      }
    };
    this.setupRpcCall("addTunnelPoliciesRule", handleRequest);
  }

  rpcGetRoutes() {
    const handleRequest = async () => {
      try {
        return await this.configureReporter.getRoutes();
      } catch (error) {
        return this.handleError(error, new messages.Routes());
      }
    };
    this.setupRpcCall("getRoutes", handleRequest);
  }

  rpcAddRoute() {
    const handleRequest = async (request) => {
      try {
        return await this.configureReporter.addRoute(request.getRoute());
      } catch (error) {
        return this.handleError(error, new messages.RouteAdd());
      }
    };
    this.setupRpcCall("addRoute", handleRequest);
  }

  rpcUpdateRoute() {
    const handleRequest = async (request) => {
      try {
        return await this.configureReporter.updateRoute(request.getRoute());
      } catch (error) {
        return this.handleError(error, new messages.RouteUpdate());
      }
    };
    this.setupRpcCall("updateRoute", handleRequest);
  }

  rpcRemoveRoute() {
    const handleRequest = async (request) => {
      try {
        return await this.configureReporter.removeRoute(request.getRuleId());
      } catch (error) {
        return this.handleError(error, new messages.RouteRemove());
      }
    };
    this.setupRpcCall("removeRoute", handleRequest);
  }

  rpcGetWebcacheConfig() {
    const handleRequest = async (request) => {
      try {
        return await this.configureReporter.getWebcacheConfig();
      } catch (error) {
        return this.handleError(error, new messages.WebcacheConfResponse());
      }
    };
    this.setupRpcCall("getWebcacheConfig", handleRequest);
  }

  rpcSetWebcacheConfig() {
    const handleRequest = async (request) => {
      try {
        return await this.configureReporter.setWebcacheConfig(request.getConfig());
      } catch (error) {
        return this.handleError(error, new messages.WebcacheConfResponse());
      }
    };
    this.setupRpcCall("setWebcacheConfig", handleRequest);
  }

  rpcGetTrafficPolicies() {
    const handleRequest = async () => {
      try {
        return await this.configureReporter.getTrafficPolicies();
      } catch (error) {
        return this.handleError(error, new messages.TrafficPolicies());
      }
    };
    this.setupRpcCall("getTrafficPolicies", handleRequest);
  }

  rpcDeleteTrafficPolicy() {
    const handleRequest = async (request) => {
      try {
        return await this.configureReporter.deleteTrafficPolicy(request.getRuleId());
      } catch (error) {
        return this.handleError(error, new messages.TrafficPolicyDelete());
      }
    };
    this.setupRpcCall("deleteTrafficPolicy", handleRequest);
  }

  rpcUpdateTrafficPolicy() {
    const handleRequest = async (request) => {
      try {
        return await this.configureReporter.updateTrafficPolicy(request.getPolicy());
      } catch (error) {
        return this.handleError(error, new messages.TrafficPolicyUpdate());
      }
    };
    this.setupRpcCall("updateTrafficPolicy", handleRequest);
  }

  rpcAddTrafficPolicy() {
    const handleRequest = async (request) => {
      try {
        return await this.configureReporter.addTrafficPolicy(request.getPolicy());
      } catch (error) {
        return this.handleError(error, new messages.TrafficPolicyAdd());
      }
    };
    this.setupRpcCall("addTrafficPolicy", handleRequest);
  }

  rpcGetTcpxRules() {
    const handleRequest = async (request) => {
      try {
        return await this.configureReporter.getTcpxRules();
      } catch (error) {
        return this.handleError(error, new messages.TcpxRules());
      }
    };
    this.setupRpcCall("getTcpxRules", handleRequest);
  }

  rpcAddTcpxRule() {
    const handleRequest = async (request) => {
      try {
        return await this.configureReporter.addTcpxRule(request);
      } catch (error) {
        return this.handleError(error, new messages.TcpxRuleAdd());
      }
    };
    this.setupRpcCall("addTcpxRule", handleRequest);
  }

  rpcUpdateTcpxRule() {
    const handleRequest = async (request) => {
      try {
        return await this.configureReporter.updateTcpxRule(request.getRule());
      } catch (error) {
        return this.handleError(error, new messages.TcpxRuleUpdate());
      }
    };
    this.setupRpcCall("updateTcpxRule", handleRequest);
  }

  rpcRemoveTcpxRule() {
    const handleRequest = async (request) => {
      try {
        return await this.configureReporter.removeTcpxRule(request.getRuleId());
      } catch (error) {
        return this.handleError(error, new messages.TcpxRuleRemove());
      }
    };
    this.setupRpcCall("removeTcpxRule", handleRequest);
  }

  rpcMoveTcpxRule() {
    const handleRequest = async (request) => {
      try {
        return await this.configureReporter.moveTcpxRule(request.getRuleId(), request.getUpward());
      } catch (error) {
        return this.handleError(error, new messages.TcpxRuleMove());
      }
    };
    this.setupRpcCall("moveTcpxRule", handleRequest);
  }
  
  rpcGetPathGateways() {
    const handleRequest = async (request) => {
      try {
        return await this.configureReporter.getPathGateways();
      } catch (error) {
        return this.handleError(error, new messages.PathGatewaysResponse());
      }
    };
    this.setupRpcCall("getPathGateways", handleRequest);
  }

  rpcRemovePathGateway() {
    const handleRequest = async (request) => {
      try {
        return await this.configureReporter.removePathGateway(request.getIsPrimary());
      } catch (error) {
        return this.handleError(error, new messages.PathGatewaysResponse());
      }
    };
    this.setupRpcCall("removePathGateway", handleRequest);
  }

  rpcGetPathConfig() {
    const handleRequest = async (request) => {
      try {
        return await this.configureReporter.getPathConfig();
      } catch (error) {
        return this.handleError(error, new messages.PathConfigResponse());
      }
    };
    this.setupRpcCall("getPathConfig", handleRequest);
  }

  rpcSetPathConfig() {
    const handleRequest = async (request) => {
      try {
        return await this.configureReporter.setPathConfig(request.getConfig());
      } catch (error) {
        return this.handleError(error, new messages.PathConfigResponse());
      }
    };
    this.setupRpcCall("setPathConfig", handleRequest);
  }

  rpcResetService() {
    const handleRequest = async (request) => {
      try {
        return await this.configureReporter.resetService(request.getKind());
      } catch (error) {
        return this.handleError(error, new messages.ServiceReset());
      }
    };
    this.setupRpcCall("resetService", handleRequest);
  }

  rpcChangeSshPassword() {
    const handleRequest = async (request) => {
      try {
        return await this.configureReporter.changeSshPassword(request.getPassword());
      } catch (error) {
        return this.handleError(error, new messages.SshPasswordChange());
      }
    };
    this.setupRpcCall("changeSshPassword", handleRequest);
  }

  setupRpc() {
    this.rpcGetSystemSettings();
    this.rpcUpdateSystemSettings();
    this.rpcGetNetworkSettings();
    this.rpcUpdateNetworkSettings();
    this.rpcGetOptimizationSettings();
    this.rpcUpdateOptimizationSettings();
    this.rpcGetMonitorSettings();
    this.rpcUpdateMonitorSettings();
    this.rpcGetTunnelPolicies();
    this.rpcDeleteTunnelPoliciesRule();
    this.rpcUpdateTunnelPoliciesRule();
    this.rpcAddTunnelPoliciesRule();
    this.rpcGetTrafficPolicies();
    this.rpcDeleteTrafficPolicy();
    this.rpcUpdateTrafficPolicy();
    this.rpcAddTrafficPolicy();
    this.rpcGetRoutes();
    this.rpcAddRoute();
    this.rpcUpdateRoute();
    this.rpcRemoveRoute();
    this.rpcGetTcpxRules();
    this.rpcAddTcpxRule();
    this.rpcUpdateTcpxRule();
    this.rpcRemoveTcpxRule();
    this.rpcMoveTcpxRule();
    this.rpcGetWebcacheConfig();
    this.rpcSetWebcacheConfig();
    this.rpcGetPathConfig();
    this.rpcSetPathConfig();
    this.rpcGetPathGateways();
    this.rpcRemovePathGateway();
    this.rpcResetService();
    this.rpcChangeSshPassword();
  }
}

// (async () => {
//   const WanosConf = require("./wanos-conf");
//   let wanosConf = new WanosConf("/etc/wanos/wanos.conf", "/etc/wanos/peers");
//   await wanosConf.loadConfig();
//   await wanosConf.loadPeers();
//   let reporter = new ConfigureReporter(wanosConf);
//   try {
//     let result = await reporter.resetService("stats");
//     console.log(JSON.stringify(result.toObject()));
//   } catch (err) {
//     console.log(err);
//     console.log(err.rpcError.toObject());
//   }
// })();

module.exports = {
  ConfigureRpcController
};