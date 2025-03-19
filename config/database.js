'use strict';
const mysql = require('mysql2'); // Cambia a mysql2

const conexion = mysql.createConnection({
  host: 'switchback.proxy.rlwy.net',
  user: 'root',
  password: 'bkWXOWIuTbRWPOGYkfUqfRjGIptdbcRf',
  database: 'railway',
  port: 51644,
});

conexion.connect(function (err) {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
  } else {
    console.log('✅ Conexión exitosa a MySQL');
  }
});

module.exports = conexion;
