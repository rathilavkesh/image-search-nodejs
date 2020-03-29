'use strict';
const { User } = require('../models/index');
const log = require('../config/logger/winston');

const UserService = () => {
  const isUserExist = async (email) => {
    return User.findOne({
      where: { email: email }
    }).then((err, user) => {
      if (err || user == null) {
        log.error(`User with ${email} email does not exist!`);
        return false;
      }
      return true;
    });
  };

  return {
    isUserExist: isUserExist
  };
};

module.exports = UserService();
