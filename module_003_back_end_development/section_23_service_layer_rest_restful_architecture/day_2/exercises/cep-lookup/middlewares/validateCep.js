const CepSchema = require('../schemas/CepSchema');

const validateCep = (req, res, next) => {
  const { cep } = req.params;

  const { code, error } = CepSchema.validateCep(cep);

  if (error) return res.status(code).json({ error });

  next();
}

module.exports = validateCep;
