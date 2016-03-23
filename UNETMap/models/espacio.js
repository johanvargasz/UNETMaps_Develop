
var mongoose = require('mongoose'),  
    Schema   = mongoose.Schema;

var espacioSchema = new Schema({  

 nombre : {type : String},
 tipoEspacio :     { type: String},
 coordenada:     		{ type: String },
  croquis :    { type: String , required: true},
  descripcion: { type: String },
  caracteristicas : [{
  		tipo: {type:String} ,
  		valor: {type: String}} ],
  valoracion : { type: String },
  comentarios : { type: Schema.Types.ObjectId, ref: 'comentario'}

});

module.exports = mongoose.model('espacio', espacioSchema);