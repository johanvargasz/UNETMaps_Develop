var express = require('express');
var routerPost = express.Router();
var mongoose = require('mongoose');  	

//Modelos requeridos
var piso  = mongoose.model('piso');
var edificioController = require("../controllers/edificioController.js");

exports.crearPiso = function(req, edificio){

	var newPiso = new piso({
		 nombre:     		req.pisoNombre,
 		 indice:     		req.pisoIndice,
 		 croquis:     		req.pisoCroquis
 		 

	});
    newPiso.caracteristicas.push( req.pisoCaracteristicas);
	newPiso.save(function(error,result)
		{
			if (error)
			{
				callback(error)
			}else{

				edificioController.actualizarEdificio(edificio ,result._id);
				//callback(result)
			}

		});

}

exports.verPiso = function( req ,espacioId,callback){// si se llaama  desde ver piso se pasa espacioId = "cadenaIndeterminada"

	piso.find({nombre : req.body.nombre},function(error,result)
		{
			if (error)
			{
				callback(error)
			}else{
				callback(result)
			}

		});

}/*
exports.verPiso = function( req ,espacioId,callback){// si se llaama  desde ver piso se pasa espacioId = "cadenaIndeterminada"

	piso.find({ $or : [ {nombre : req.body.nombre},{ espacios : espacioId  } ] },function(error,result)
		{
			if (error)
			{
				callback(error)
			}else{
				callback(result)
			}

		});

}*/

exports.agregarEspacio = function( pisoId, espacioId, callback){

	piso.update({ _id : pisoId } ,{ $push : { espacios : espacioId }},function(error,result)
		{
			if (error)
			{
				callback(error)
			}else{
				callback(result)
			}

		});
}


/*


exports.removerAula = function( callback){

	aula.remove(function(error,result)
		{
			if (error)
			{
				callback(error)
			}else{
				callback(result)
			}

		});
}
*/