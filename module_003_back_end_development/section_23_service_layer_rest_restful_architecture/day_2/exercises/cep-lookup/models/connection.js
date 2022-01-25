const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'cake88.cake88',
  database: 'cep_lookup'
});

module.exports = connection;
