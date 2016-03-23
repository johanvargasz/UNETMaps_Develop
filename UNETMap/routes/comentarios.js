var express = require('express');
var routerComentario = express.Router();
var mongoose = require('mongoose');  	

var comentarioController = require("../controllers/comentarioController.js");


  routerComentario.post('/crearComentario', function(req, res, next) {

  	comentarioController.crearComentario(req, function(result){

  		res.json(result);

  	});

  });


  routerComentario.post('/eliminarComentario', function(req, res, next) {

  	comentarioController.eliminarComentario(req, function(result){

  		res.json(result);

  	});

  });


  routerComentario.post('/aprobarComentario', function(req, res, next) {

  	comentarioController.aprobarComentario(req, function(result){

  		res.json(result);

  	});

  });



module.exports = routerComentario;
