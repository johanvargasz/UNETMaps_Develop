// Modelo user

var mongoose = require('mongoose'),  
    Schema   = mongoose.Schema;

var pisoSchema = new Schema({  

  nombre:     		{ type: String  },
  indice:     		{ type: Number, required:true},
  croquis:     		{ type: String, required: true },
  caracteristicas:  [{
  		 tipo: {type:String } ,
  		 valor: {type: String } } ],
  espacios: 		[ {type: Schema.Types.ObjectId, ref: 'espacio' }]
});

module.exports = mongoose.model('piso', pisoSchema);