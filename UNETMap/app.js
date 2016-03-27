var express     = require("express"),  
    app         = express(),
    mongoose    = require('mongoose'),
    http        = require("http"),
    server      = http.createServer(app),
    methodOverride  = require("method-override");
    bodyParser      = require('body-parser');


app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json());  
app.use(methodOverride());
//app.use(express.session({ secret: 'secretkey' }));


mongoose.connect('mongodb://localhost/UNETMap', function(err, res) {  
  if(err) 
    console.log('ERROR: connecting to Database. ' + err);
  else
    console.log('Connect to DB UNETMap');
  
});


//Importar los modelos


require('./models/administrador')(app, mongoose);
require('./models/espacio')(app, mongoose);
require('./models/tipoEspacio')(app, mongoose);
require('./models/comentario')(app, mongoose);
require('./models/usuarioBloqueado')(app, mongoose);
require('./models/edificio')(app, mongoose);
require('./models/piso')(app, mongoose);
//require('./models/historial')(app, mongoose);


// Importar los modulos de otro archivos
var routerAdministrador =require('./routes/administradores.js')
    routerEspacio =   require('./routes/espacios.js'),
    routerTipoEspacio =require('./routes/tiposEspacios.js'),
    routerComentario =require('./routes/comentarios.js'),
    routerUsuarioBloqueado =require('./routes/usuariosBloqueados.js'),
    routerEdificio =require('./routes/edificios.js'),
    routerPiso =require('./routes/pisos.js');
// Uso de los rutas que están en otros archivos.

app.use(routerAdministrador);
app.use(routerEdificio);
app.use(routerEspacio);
app.use(routerTipoEspacio);
app.use(routerComentario);
app.use(routerUsuarioBloqueado);
app.use(routerPiso);


app.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});
