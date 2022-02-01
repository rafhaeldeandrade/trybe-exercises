const express = require('express');
const route = express.Router();
const validateCep = require('../middlewares/validateCep');
const CepController = require('../controllers/CepController');

route.get('/:cep', validateCep, CepController.getByCep);

module.exports = route;