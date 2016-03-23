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


	for (var num = 0; num < req.body.cantidadPisos; num++){ 
		   console.log("esta en "+num);
		   console.log("con"+req.body.pisos[num]);
 			pisoController.crearPiso(req.body.pisos[num],function (pisoCreado) {

		newEdificio.pisos.push(pisoCreado._id);
		});
	}

	    
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
exports.verEdificioYPisos = function( req ,callback){


edificio.find({ nombre : req.body.nombre},function(error, result){
		if (error)
			{
				callback(error)
			}else{
				callback(result)
			}

	});
/*	edificio.find({ nombre : req.body.nombre}).populate('piso').exec(function(error, result){
		if (error)
			{
				callback(error)
			}else{
				callback(result)
			}

	});*/

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