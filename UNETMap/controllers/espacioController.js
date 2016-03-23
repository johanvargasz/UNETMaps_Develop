var express = require('express');
var mongoose = require('mongoose');  	

//Modelos requeridos
var espacio  = mongoose.model('espacio');
var piso  = mongoose.model('piso');
var edificio  = mongoose.model('edificio');

var pisoController = require("../controllers/pisoController.js");
var edificioController = require("../controllers/edificioController.js");

exports.crearEspacio = function(req, callback){ 

	var newEspacio = new espacio({
		nombre : req.body.espacioNombre,
		tipoEspacio :   req.type.tipoEspacio  ,
        coordenada:     	req.body.espacioCoordenada,
        croquis :    { type: String , required: true},
        descripcion:  req.body.espacioDescripcion
        
	});
  
    newEspacio.caracteristicas.push( req.body.espacioCaracteristicas);
	newEspacio.save(function(error,result)
		{
			if (error)
			{
				callback(error)
			}else{
				pisoController.agregarEspacio(req.body.pisoId,newEspacio._id,function(error)
					{
						if(error) 
							console.log("error al agregar espacio")
					 	else  
					 		callback(result)		
					});
				
			}

		});

}

exports.verEspacio = function( req ,callback){

	espacio.find({ nombre : req.body.nombre }).populate('comentarios').exec(function(error,result)
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

HACER metodo de busqueda por coordenada
*/
/*
//cuando se utilice el buscador
exports.buscarEspacio = function(req , callback){
	
	espacio.find( { espacio:  req.body.name }, function(error,result){

		if (error)
			{
				callback(error)
			}else{
				
				if (result){
					pisoController.buscarPiso("dasdasd",result._id,function(resultado)
						{
							if(resultado){
								edificioController.buscarEdificio("sdasd",resultado._id,function(encontrado){

									if(encontrado)
									{
										console.log("edificio :"+encontrado.nombre+ " piso : "+resultado.nombre)
									}
								});
							}
						});
				}
			}

	});

}*/