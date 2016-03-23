var express = require('express');
var routerPiso = express.Router();
var mongoose = require('mongoose');  	

var pisoController = require("../controllers/pisoController.js");


  routerPiso.post('/crearPiso', function(req, res, next) {

  	pisoController.crearPiso(req, function(result){

  		res.json(result);

  	});

  });



  routerPiso.post('/verPiso', function(req, res, next) {

  	pisoController.verPisoYPisos(req, function(result){

  		res.json(result);

  	});

  });

module.exports = routerPiso;
