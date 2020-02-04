'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// Cargar archivos de rutas
var project_routes = require('./routes/project');

// middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// CORS

// rutas
// app.use('/', project_routes); localhost:3700/test
app.use('/api', project_routes); // localhost:3700/api/test

// Exportar
module.exports = app;