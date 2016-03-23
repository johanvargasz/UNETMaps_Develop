
var mongoose = require('mongoose'),  
    Schema   = mongoose.Schema;

var comentarioSchema = new Schema({  

  email : { type: String , required: true},
  amonestacion : { type: Number , required: true}
  
    
});

module.exports = mongoose.model('usuarioBloqueado', comentarioSchema);