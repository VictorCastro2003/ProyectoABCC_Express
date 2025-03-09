const mysql = require("mysql");

const connection = mysql.createConnection({
  host: process.env.DB_HOST,  // No debe ser "localhost" en Railway
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306,
});

connection.connect((err) => {
  if (err) {
    console.error("🚨 Error al conectar a la BD:", err);
    return;
  }
  console.log("✅ Conexión exitosa a la BD");
});

module.exports = connection;
