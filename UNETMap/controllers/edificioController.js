var express = require('express');
var mongoose = require('mongoose');  	

//Modelos requeridos
var piso  = mongoose.model('piso');
var edificio  = mongoose.model('edificio');

var pisoController = require("../controllers/pisoController.js");


exports.crearEdificio = function(req, callback){


	var newEdificio = new edificio({
		 nombre:     		req.body.edificioNombre,
 		 coordenada:     		req.body.edificioCoordenada,
 		 croquis:     		req.body.edificioCroquis,

  		 descripcion: req.body.edificioDescripcion
	});
	newEdificio.caracteristicas.push( req.body.edificioCaracteristicas);

	    
	newEdificio.save(function(error,result)
		{
			if (error)
			{
				callback(error)
			}else{
				callback(result)
			}

		});

}
exports.actualizarEdificio = function( nombreEdificio,id,callback){

	edificio.update({ nombre : nombreEdificio },{ $push :{ pisos : id }},function(error,result){
	
			if(error){
			console.log("error al actualizar edificio")
		}
	 });
}

exports.verEdificioYPisos = function( req ,callback){

	edificio.find({ nombre : req.body.nombre},{ __v :0 }).populate('pisos',{ __v :0 }).exec(function(error, result){
		if (error)
			{
				callback(error)
			}else{
				callback(result)
			}

	});

}

/*
exports.verEdificio = function( req , pisoId ,callback){

	edificio.find({ $or  : [  {nombre : req.body.nombre},{ pisos : pisoId } ] },function(error,result)
		{
			if (error)
			{
				callback(error)
			}else{
				callback(result)
			}

		});

}*/