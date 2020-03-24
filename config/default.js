'use strict';
const utility = require('../util/utility');

const { env } = process;

const dbPassword = env.DB_PASSWORD || 'root';
const decDBPassword = utility.decrypt(dbPassword);

module.exports = {
  app: {
    env: 'local',
    port: env.PORT || 4000
  },
  database: {
    host: env.DB_HOST || 'localhost',
    port: env.DB_PORT || 3306,
    name: env.DB_NAME || 'nodejs',
    username: env.DB_USERNAME || 'root',
    password: decDBPassword,
    dialect: 'mysql'
  }
};
