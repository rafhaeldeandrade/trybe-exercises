const CepService = require('../services/CepService');

const getByCep = async (req, res) => {
  const { cep } = req.params;

  const result = await CepService.getByCep(cep);

  if (!result) return res.status(404).json({ "error": { "code": "notFound", "message": "CEP não encontrado" } });

  res.status(200).json(result);
}

module.exports = {
  getByCep,
}