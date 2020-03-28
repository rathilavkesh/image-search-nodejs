'use strict';
const winston = require('winston');

const { createLogger, transports, format } = winston;
const { combine, timestamp } = format;

const isProd = process.env.NODE_ENV === 'production';

const options = {
  console: {
    level: isProd ? 'info' : 'debug',
    handleExceptions: true,
    json: false,
    colorize: true,
  },
};

const logger = createLogger({
  format: combine(timestamp(), format.json()),
  transports: [new transports.Console(options.console)],
  exitOnError: false, // do not exit on handled exceptions
});

logger.stream = {
  write: (message) => {
    logger.info(message);
  },
};

module.exports = logger;
