const error = {
  invalidData: { code: 'invalidData', message: 'CEP Inválido'},
  notFound: { code: 'notFound', message: 'CEP não encontrado'}
}

const validateCep = (cep) => {
  const code = 400;

  const isAValidCep = (cep => /\d{5}-?\d{3}/.test(cep));
  
  if (!isAValidCep(cep)) return { code, error: invalidData }

  return {};
}

module.exports = { validateCep };
