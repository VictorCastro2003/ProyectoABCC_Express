const mysql = require("mysql");

const dbConfig = {
  host: process.env.MYSQLHOST, 
  user: process.env.MYSQLUSER,
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: process.env.MYSQLDATABASE,
  port: process.env.MYSQLPORT || 3306,
};

let connection;

function handleDisconnect() {
  connection = mysql.createConnection(dbConfig);

  connection.connect((err) => {
    if (err) {
      console.error("🚨 Error al conectar a la BD:", err);
      setTimeout(handleDisconnect, 5000); // Reintentar conexión en 5 segundos
    } else {
      console.log("✅ Conexión exitosa a la BD");
    }
  });

  connection.on("error", (err) => {
    console.error("🚨 Error en la conexión:", err);
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      handleDisconnect(); // Reconectar en caso de desconexión
    } else {
      throw err;
    }
  });
}

handleDisconnect();

module.exports = connection;
