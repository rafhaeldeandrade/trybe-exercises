const CepModel = require('../models/CepModel');

const getByCep = async (cep) => {
  const result = await CepModel.getByCep(cep);
  return result;
}

module.exports = {
  getByCep,
}
