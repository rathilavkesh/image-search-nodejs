'use strict';
const home = require('./home');
const encryptDecrypt = require('./encryptDecrypt');
const users = require('./users');

module.exports = (app) => {
  app.use('/', home);
  app.use('/users', users);
  app.use('/encryptDecrypt', encryptDecrypt);
};
