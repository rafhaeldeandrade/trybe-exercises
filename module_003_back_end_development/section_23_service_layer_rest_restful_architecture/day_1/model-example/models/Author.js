const connection = require('./connection');

// Busca todas as pessoas autoras do banco.

const serialize = (authorData) => ({
  id: authorData.id,
  firstName: authorData.first_name,
  middleName: authorData.middle_name,
  lastName: authorData.last_name,
});

const getAll = async () => {
  const [authors] = await connection.execute(
      'SELECT id, first_name, middle_name, last_name FROM model_example.authors;',
  );

  if (authors.length === 0) return null;

  return authors.map(serialize);
};

const getById = async (id) => {
  const [author] = await connection.execute(
      'SELECT * FROM model_example.authors WHERE id = ?', [id]
  );

  if (author.length === 0) return null;

  return author.map(serialize);
}

module.exports = {
    getAll,
    getById,
};
