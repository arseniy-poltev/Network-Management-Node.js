let config;
if (process.env.NODE_ENV == "dev") {
  config = require("../config.dev.json");
} else {
  config = require("../config.json");
}

config.wanosLogFile = "/wanos/wanos.log";
config.logEntries = 150;

module.exports = config;