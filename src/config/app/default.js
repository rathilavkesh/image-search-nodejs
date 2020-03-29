'use strict';
const logger = require('../logger/winston');
const { decrypt } = require('../../util/utility');

const { env } = process;
const dbPassword = env.DB_PASSWORD || 'root';
const decDBPassword = decrypt(dbPassword);

module.exports = {
  app: {
    env: 'local',
    port: env.PORT || 4000,
    isProd: env.NODE_ENV === 'production'
  },
  database: {
    host: env.DB_HOST || 'localhost',
    port: env.DB_PORT || 3306,
    name: env.DB_NAME || 'nodejs',
    username: env.DB_USERNAME || 'root',
    password: decDBPassword,
    dialect: 'mysql',
    logging: (msg) => {
      logger.debug(msg);
    },
    pool: {
      maxConnections: 10,
      minConnections: 0,
      maxIdleTime: 30000
    }
  }
};
