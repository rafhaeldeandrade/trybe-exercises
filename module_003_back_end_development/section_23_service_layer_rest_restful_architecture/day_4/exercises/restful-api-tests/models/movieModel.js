const connection = require('./connection');

const serialize = (row) => ({
  id: row.id,
  title: row.title,
  directedBy: row.directed_by,
  releaseYear: row.release_year,
});

const create = async ({ title, directedBy, releaseYear }) => {
  const [row] = await connection.execute(
    'INSERT INTO model_example.movies (title, directed_by, release_year) VALUES (?, ?, ?)',
    [title, directedBy, releaseYear],
  );

  return {
    id: row.insertId,
  };
};

const findById = async ({ id }) => {
  const [row] = await connection.execute(
    'SELECT * FROM model_example.movies WHERE id = ?',
    [id],
  );

  if (!row) return [];

  return row.map(serialize);
};

module.exports = {
  create,
  findById,
};
