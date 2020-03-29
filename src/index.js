/* eslint-disable no-unreachable */
/* eslint-disable no-process-exit */
/* eslint-disable no-use-before-define */
'use strict';
/**
 * Module dependencies.
 */
require('dotenv').config();
const http = require('http');

const config = require('config');
const app = require('./app');
const logger = require('./config/logger/winston');
const models = require('./models');

/**
 * Create HTTP server.
 */
const server = http.createServer(app);
const appPort = normalizePort(process.env.PORT || config.get('app.port') || '3000');

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
  const value = parseInt(val, 10);

  if (Number.isNaN(value)) {
    return val;
  }

  if (value >= 0) {
    return value;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? `Pipe ${appPort}` : `Port ${appPort}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      logger.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      logger.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
  logger.info(`Environment is ${config.get('app.env')}.`);
  logger.info(`Listening on ${bind} port.`);
}

models.sequelize.sync({ force: true }).then(() => {
  /**
   * Get port from environment and store in Express.
   */
  app.set('port', appPort);

  /**
   * Listen on provided port, on all network interfaces.
   */
  server.listen(appPort);
  server.on('error', onError);
  server.on('listening', onListening);
});
