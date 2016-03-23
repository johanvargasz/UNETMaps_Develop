var express = require('express');
var mongoose = require('mongoose');  	

//Modelos requeridos
var comentario  = mongoose.model('comentario');
var espacio  = mongoose.model('espacio');

//var pisoController = require("../controllers/pisoController.js");

exports.crearComentario = function(req, callback){

    var newComentario = new comentario({
  		  nombre:    req.body.nombre,
 		  email : req.body.email,
  	     status :  false

	});

	if (req.body.texto)
	 	  newComentario.texto =     req.body.texto
  	
 	if (req.body.valoracion)
  		  newComentario.valoracion=   req.body.valoracion

	newComentario.save(function(error,result)
		{
			if (error)
			{
				callback(error)
			}else{
				callback(result)
			}

		});

	
}



exports.eliminarComentario = function(idComentario, callback){

	comentario.remove({ _id : idComentario},function(error,result)
		{
			if (error)
			{
				callback(error)
			}else{
				callback(result)
			}

		});

	}


exports.aprobarComentario = function(idComentario, callback){

	comentario.update({ _id : idComentario},{ $set :{ status :true}},function(error,result)
		{
			if (error)
			{
				callback(error)
			}else{
				callback(result)
			}

		});

	}



