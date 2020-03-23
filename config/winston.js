'use strict';

const appRoot = require('app-root-path');
const winston = require('winston');
const { createLogger, transports, format } = winston;
const { combine, timestamp } = format;

const options = {
  file: {
    level: 'info',
    filename: `${appRoot}/logs/app.log`,
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: true,
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true,
  },
};

const logger = createLogger({
  format: combine(timestamp(), format.json()),
  transports: [new transports.File(options.file), new transports.Console(options.console)],
  exitOnError: false, // do not exit on handled exceptions
});

logger.stream = {
  write: (message) => {
    logger.info(message);
  },
};

module.exports = logger;
