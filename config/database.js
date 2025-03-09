'use strict';

const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'sql3.freesqldatabase.com', 
    user: 'sql3766662',           
    password: '9rtfPPsExy',       
    database: 'sql3766662'          
});

conexion.connect(function(err){
    if(err)throw err;
    console.log('Conexion Exitosas a BD');
});
module.exports=conexion;
