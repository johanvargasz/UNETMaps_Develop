// Modelo user

var mongoose = require('mongoose'),  
    Schema   = mongoose.Schema;

var edificioSchema = new Schema({  

  nombre:     		{ type: String, required: true },
  croquis:     		{ type: String ,required:true},
  coordenada:     		{ type: String, required: true },
  valoracion:     		{ type: Number, min:0,max:5},
  descripcion : { type : String,required: true},
  caracteristicas: [{
  		 tipo: {type:String} ,
  		 valor: {type: String}  }],
  pisos: [ {type: Schema.Types.ObjectId, ref: 'piso' } ]
  
});

module.exports = mongoose.model('edificio', edificioSchema);