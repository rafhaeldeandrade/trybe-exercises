const connection = require('./connection');

const getByCep = async (cep) => {
  const [row] = await connection.execute(
    'SELECT * FROM cep_lookup.ceps WHERE cep = ?', [cep]
  );

  console.log(row);
  if (!row) return null;

  return {
    cep: row[0].cep.slice(0, 5) + '-' + row[0].cep.slice(5),
    logradouro: row[0].logradouro,
    bairro: row[0].bairro,
    localidade: row[0].localidade,
    uf: row[0].uf,
  }
}

module.exports = { getByCep };
