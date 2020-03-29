'use strict';
const Cryptr = require('cryptr');
const { validationResult } = require('express-validator');

const utility = (() => {
  const secretKey = process.env.SECRET_KEY;
  const cryptr = new Cryptr(secretKey);

  const success = (res, data) => {
    res.status(200);
    res.json({
      status: 'SUCCESS',
      status_code: 200,
      data: data
    });
  };

  const error = (res, code, data) => {
    res.status(code);
    res.json({
      status: 'ERROR',
      status_code: code,
      data: data
    });
  };

  const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }
    const extractedErrors = [];
    errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));

    return res.status(422).json({
      errors: extractedErrors
    });
  };

  const encrypt = (value) => {
    if (value !== null) {
      return cryptr.encrypt(value);
    }
    return null;
  };

  const decrypt = (value) => {
    try {
      if (value !== null) {
        return cryptr.decrypt(value);
      }
    } catch (error) {
      return value;
    }
    return null;
  };

  return {
    success,
    error,
    validate,
    decrypt,
    encrypt
  };
})();

Object.freeze(utility);

module.exports = utility;
