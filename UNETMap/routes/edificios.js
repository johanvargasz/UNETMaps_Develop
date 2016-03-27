var express = require('express');
var routerEdificio = express.Router();
var mongoose = require('mongoose');  	

var pisoController = require("../controllers/pisoController.js");
var edificioController = require("../controllers/edificioController.js");


  routerEdificio.post('/crearEdificio', function(req, res, next) {

  	edificioController.crearEdificio(req, function(result){

          for (var num = 0; num < req.body.cantidadPisos; num++){ 
                     
              pisoController.crearPiso(req.body.pisos[num],req.body.edificioNombre); 
                    if(num==req.body.cantidadPisos-1 )
                      res.json(result);
                 
          }
  		

  	});

  });



  routerEdificio.post('/verEdificioYPisos', function(req, res, next) {

  	edificioController.verEdificioYPisos(req, function(result){

  		res.json(result);

  	});

  });

module.exports = routerEdificio;
