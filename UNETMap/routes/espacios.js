var express = require('express');
var routerEspacio = express.Router();
var mongoose = require('mongoose');  	

var espacioController = require("../controllers/espacioController.js");


  routerEspacio.post('/crearEspacio', function(req, res, next) {

  	espacioController.crearEspacio(req, function(result){

  		res.json(result);

  	});

  });



  routerEspacio.post('/verEspacio', function(req, res, next) {

  	espacioController.verEspacio(req, function(result){

  		res.json(result);

  	});

  });


module.exports = routerEspacio;
