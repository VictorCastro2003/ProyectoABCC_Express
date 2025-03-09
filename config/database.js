const mysql = require('mysql');

const connectionConfig = {
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "mi_base_de_datos",
  port: process.env.DB_PORT || 3306,
};

let connection;

function connectDatabase() {
  connection = mysql.createConnection(connectionConfig);

  connection.connect((err) => {
    if (err) {
      console.error("Error al conectar a la BD:", err);
      setTimeout(connectDatabase, 5000); // Reintentar después de 5 segundos
    } else {
      console.log("✅ Conexión exitosa a la BD");
    }
  });

  connection.on("error", (err) => {
    console.error("Error en la BD:", err);
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      console.log("🔄 Reconectando a la BD...");
      connectDatabase(); // Reconectar si la conexión se pierde
    } else {
      throw err;
    }
  });
}

connectDatabase();

module.exports = connection;
