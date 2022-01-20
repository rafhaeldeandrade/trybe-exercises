const connection = require('./connection');

const serialize = (book) => {
  return {
    id: book.id,
    title: book.title,
    authorId: book.author_id,
  }
}

const getAll = async () => {
  const [books] = await connection.execute('SELECT * FROM model_example.books');

  return books.map(serialize);
}

const getById = async (id) => {
  const [books] = await connection.execute('SELECT * FROM model_example.books WHERE id = ?', [id]);

  if (books.length === 0) return null;

  return books.map(serialize)[0];
}

const getByAuthorId = async (id) => {
  const [books] = await connection.execute('SELECT * FROM model_example.books WHERE author_id = ?', [id]);

  if (books.length === 0) return null;
  
  return books.map(serialize);
}

const create = async (title, authorId) => {
  await connection.execute('INSERT INTO model_example.books (title, author_id) VALUES (?, ?)', [title, authorId]);
}

module.exports = {
  getAll,
  getByAuthorId,
  getById,
  create,
}