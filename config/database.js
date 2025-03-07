'use strict';

const mysql = require('mysql');

const conexion= mysql.createConnection({
    host:'localhost',
    user:'victorcastro',
    password:'itsj',
    database:'BD_Express_2025'

});
conexion.connect(function(err){
    if(err)throw err;
    console.log('Conexion Exitosas a BD');
});
module.exports=conexion;