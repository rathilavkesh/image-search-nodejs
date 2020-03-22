'use strict';

const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.json({ title: 'My First NodeJS Express App!!!!' });
});

module.exports = router;
