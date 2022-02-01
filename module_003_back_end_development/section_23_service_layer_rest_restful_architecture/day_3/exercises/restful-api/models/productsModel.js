/* eslint-disable no-console */
const connection = require('./connection');

const add = async (name, brand) => {
  try {
    const [row] = await connection.query(
      `INSERT INTO products (name, brand) VALUES (?, ?);`,
      [name, brand],
    );

    return [{ id: row.insertId, name, brand }];
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const getAll = async () => {
  try {
    const [rows] = await connection.query('SELECT * FROM products');
    if (!rows.length) return [];
    return rows;
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const getById = async (id) => {
  try {
    const [row] = await connection.query(
      'SELECT * FROM products WHERE id = ?',
      [id],
    );
    if (!row.length) return false;
    return row;
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const update = async (id, name, brand) => {
  try {
    await connection.query(
      'UPDATE products SET name = ?, brand = ? WHERE id = ?',
      [name, brand, id],
    );

    return [
      {
        id,
        name,
        brand,
      },
    ];
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const exclude = async (id) => {
  try {
    return await connection.query('DELETE FROM products WHERE id = ?', [id]);
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

module.exports = { add, getAll, getById, update, exclude };
