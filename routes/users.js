'use strict';

const express = require('express');
const utility = require('../util/utility');
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  const value = 'Hello World!!!';
  const encryptedValue = utility.encrypt(value);
  res.json({ value, encryptedValue });
});

module.exports = router;
