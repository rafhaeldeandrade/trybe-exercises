const mysql = require('mysql2/promise');
require('dotenv').config();

const connection = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'senha_muito_segura',
  database: process.env.DB_DATABASE || 'model_example',
});

module.exports = connection;
