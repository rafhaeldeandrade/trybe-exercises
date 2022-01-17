const express = require('express');
const router = express.Router();
const { tokenIsValid } = require('./atv2Validations');
const axios = require('axios');

router.get('/price', tokenIsValid, async (_req, res) => {
  const result = await axios.get('https://api.coindesk.com/v1/bpi/currentprice/BTC.json');
  res.status(200).json(result.data);
});

module.exports = router;
