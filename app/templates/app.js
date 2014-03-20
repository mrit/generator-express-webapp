/*********************************************************************
*
*  app
*  app initialization
*
*********************************************************************/
var express = require('express');
var app = express();

// initialize all the configuration
require('./config')(app);

module.exports = app;
