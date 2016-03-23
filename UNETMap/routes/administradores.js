var express = require('express');
var routerAdministrador = express.Router();
var mongoose = require('mongoose');  	


var administradorController = require("../controllers/administradorController.js");


  routerAdministrador.post('/crearAdministrador', function(req, res, next) {

  	administradorController.crearAdministrador(req, function(result){

  		res.json(result);

  	});

  });



  routerAdministrador.post('/verAdministrador', function(req, res, next) {

  	administradorController.verAdministrador(req, function(result){

  		res.json(result);

  	});

  });



  routerAdministrador.post('/eliminarAdministrador', function(req, res, next) {

  	administradorController.eliminarAdministrador(req, function(result){

  		res.json(result);

  	});

  });



module.exports = routerAdministrador;
