
var mongoose = require('mongoose'),  
    Schema   = mongoose.Schema;

var comentarioSchema = new Schema({  

  texto :     { type: String },
  valoracion:     { type: String },
  nombre:    { type: String , required: true},
  email : { type: String , required: true},
  status : { type: Boolean }
  
    
});

module.exports = mongoose.model('comentario', comentarioSchema);