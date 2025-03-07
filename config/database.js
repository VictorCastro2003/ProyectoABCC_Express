"use strict";

const mysql = require("mysql");

const conexion = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "mi_base_de_datos",
  port: process.env.DB_PORT || 3306,
});

conexion.connect((err) => {
  if (err) {
    console.error("Error al conectar a la base de datos:", err);
    return;
  }
  console.log(" Conexión exitosa a la base de datos.");
});

module.exports = conexion;
