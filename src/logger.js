const winston = require("winston");
const config = require("./config");

const logger = winston.createLogger({
  level: config.logLevel,
  transports: [new winston.transports.Console()],
  format: winston.format.combine(
    winston.format.timestamp({
      format: "ddd MMM DD HH:mm:ss YYYY"
    }),
    winston.format.colorize({ all: true }),
    winston.format.printf(info => `[${info.timestamp}] : ${info.level} : ${info.message}`)
  )
});

module.exports = logger;