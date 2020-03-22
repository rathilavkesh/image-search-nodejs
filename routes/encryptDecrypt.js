'use strict';

const express = require('express');
const utility = require('../util/utility');
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  const { key, type } = req.query;
  if (type === 'encrypt') {
    const encryptedValue = utility.encrypt(key);
    res.json({ key, encryptedValue });
  } else {
    const decryptedValue = utility.decrypt(key);
    res.json({ key, decryptedValue });
  }
});

module.exports = router;
