'use strict';

const mysql = require('mysql');

const conexion= mysql.createConnection({
 const connection = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "mi_base_de_datos",
  port: process.env.DB_PORT || 3306,
});


});
conexion.connect(function(err){
    if(err)throw err;
    console.log('Conexion Exitosas a BD');
});
module.exports=conexion;
