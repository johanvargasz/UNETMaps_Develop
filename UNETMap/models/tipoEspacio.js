

var mongoose = require('mongoose'),  
    Schema   = mongoose.Schema;

var tipoEspacioSchema = new Schema({  

  nombre:     { type: String, required: true},
  descripcion:     { type: String }

  
});

module.exports = mongoose.model('tipoEspacio', tipoEspacioSchema);