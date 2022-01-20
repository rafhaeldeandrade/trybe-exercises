const connection = require('./connection');

const create = (firstName, lastName, password, email) => {
  const [row] = await connection.execute(
    'INSERT INTO crud_example.users (first_name, last_name, password, email) VALUES (?,?,?,?)',
    [firstName, lastName, password, email]
    );

  if (row.length === 0) return null;

  return {
    id: row[0].insertId,
    firstName,
    lastName,
    email
  }
}

const getAll = async () => {
  const [users] = await connection.execute(
    'SELECT * FROM crud_example.users'
  );

  if (users.length === 0) return [];

  return users;
}

const getById = async (id) => {
  const [user] = await connection.execute(
    'SELECT * FROM crud_example.users WHERE id = ?', [id]
  );

  if (user.length === 0) return null;

  return user;
}

const update = async (id, firstName, lastName, password, email) => {
  const user = getById(id);
  if (!user) return null;

  await connection.execute(
    `UPDATE crud_example.users
      SET first_name = ?, last_name = ?, password = ?, email = ?
      WHERE id = ?`, [firstName, lastName, password, email, id]
  );

  return {
    id,
    firstName,
    lastName,
    email
  }
}

module.exports = { create, getAll, update };