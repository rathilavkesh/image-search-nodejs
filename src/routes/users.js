'use strict';
const express = require('express');
const { encrypt, validate, success, error } = require('../util/utility');
const { UserService } = require('../services/index');
const { validateUserExistApi } = require('../middleware/user-service-validator');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  const value = 'Hello World!!!';
  const encryptedValue = encrypt(value);
  res.json({ value, encryptedValue });
});

/* GET is user exist with given email. */
router.get('/exist', validateUserExistApi(), validate, (req, res) => {
  const { email } = req.query;
  UserService.isUserExist(email).then((exist) => {
    const data = { email, exist };
    if (exist) {
      success(res, data);
    } else {
      error(res, 404, data);
    }
  });
});

module.exports = router;
