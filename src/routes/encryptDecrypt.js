'use strict';
const express = require('express');
const { encrypt, decrypt, success } = require('../util/utility');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  const { key, type } = req.query;
  if (type === 'encrypt') {
    const encryptedValue = encrypt(key);
    const data = { key, encryptedValue };
    success(res, data);
  } else {
    const decryptedValue = decrypt(key);
    const data = { key, decryptedValue };
    success(res, data);
  }
});

module.exports = router;
