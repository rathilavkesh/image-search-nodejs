'use strict';
const { query } = require('express-validator');

const UserValidator = () => {
  const validateUserExistApi = () => {
    return [
      query('email')
        .notEmpty()
        .withMessage('is empty.')
        .bail()
        .isEmail()
        .withMessage('is not valid email address.')
        .normalizeEmail()
    ];
  };

  return {
    validateUserExistApi
  };
};

module.exports = UserValidator();
