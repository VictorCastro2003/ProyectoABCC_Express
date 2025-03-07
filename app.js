const http = require('http');

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const flash = require ('express-flash');
const app = express();
const server = http.createServer(app);


app.use(session({secret:'mySecret',resave:false,saveUninitialized:false}));

app.use(flash());

app.use('/public',express.static(__dirname+ '/public'));

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'));

const port = process.env.PORT||3000 ;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/css',express.static(path.join(__dirname,'node-modules/bootstrap/dist/css')));
app.use('/js',express.static(path.join(__dirname,'node-modules/bootstrap/dist/js')));

//Renderizado de Front-End

app.get('/',(req,res)=>{
    let message = req.flash('message');
    res.render('index',{
        data : message
    });
});

app.get('/altas',(req,res)=>{
    res.render('altas');
});
app.get('/cambios', (req,res) => {  
    res.render('cambios')
  });
app.get('/consultas',(req,res)=>{
    res.render('consultas');
});

const rutas_alumnos = require('./routes/alumnos_routes');
app.use('/alumnos',rutas_alumnos);
/*

function servidor(peticion,respueta){
    respueta.writeHead(200,{'content-type':'text/plain'});
    respueta.write('Prueba Inicial');

    respueta.end();
}

server.on('request',servidor);
*/
server.listen(port,function(){
    console.log('Servidor Escuchando en el puerto 3000');
});