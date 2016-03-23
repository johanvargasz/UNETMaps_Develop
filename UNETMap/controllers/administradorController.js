var express = require('express');
var mongoose = require('mongoose');  	

//Modelos requeridos
var administrador  = mongoose.model('administrador');

exports.crearAdministrador = function(req, callback){

     
	var newAdministrador = new administrador({
		 nombre:     		req.body.administradorNombre,
 		 correo:     		req.body.administradorCorreo,
 		 contraseña:     		req.body.administradorcontraseña,
		 tipo : req.body.administradorTipo
	});
	
	
    
	newAdministrador.save(function(error,result)
		{
			if (error)
			{
				callback(error)
			}else{
				callback(result)
			}

		});

}

exports.verAdministrador = function( req ,callback){

	administrador.find({ nombre : req.body.nombre},function(error,result)
		{
			if (error)
			{
				callback(error)
			}else{
				callback(result)
			}

		});

}
exports.eliminarAdministrador = function( req ,callback){

	administrador.remove({ nombre : req.body.nombre},function(error, result){
		if (error)
			{
				callback(error)
			}else{
				callback(result)
			}

	});

}
