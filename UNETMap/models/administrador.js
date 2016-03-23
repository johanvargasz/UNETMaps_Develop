
var mongoose = require('mongoose'),  
    Schema   = mongoose.Schema;

var administradorSchema = new Schema({  

  nombre:     { type: String, required: true },
  correo:     { type: String , required: true},
  contraseña: { type: String, required: true },
  tipo : 	{ type: String  , required: true}
  
});

module.exports = mongoose.model('administrador', administradorSchema);