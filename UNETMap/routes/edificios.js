var express = require('express');
var routerEdificio = express.Router();
var mongoose = require('mongoose');  	


var edificioController = require("../controllers/edificioController.js");


  routerEdificio.post('/crearEdificio', function(req, res, next) {

  	edificioController.crearEdificio(req, function(result){

  		res.json(result);

  	});

  });



  routerEdificio.post('/verEdificioYPisos', function(req, res, next) {

  	edificioController.verEdificioYPisos(req, function(result){

  		res.json(result);

  	});

  });

module.exports = routerEdificio;
