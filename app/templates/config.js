/*********************************************************************
*
*  config
*  Main project config file
*
*********************************************************************/
var express = require('express');

// middlewares
var myMiddleware = require('./middlewares/yourmiddleware');

// dependencies
var routes = require('./app/routes'),
	passport = require('passport'),
	config = JSON.parse(fs.readFileSync('./src/config.json'));

module.exports = function (app) {
	// main config
	app.set('config', app.get('env') == 'development' ? config.development : config.production);
	app.set('port', process.env.PORT || app.get('config').port);
	app.set('views', path.join(__dirname, 'app/views'));
	app.set('view engine', 'jade');

	// middlewares
	app.use(express.logger('dev'));
	app.use(express.json());
	app.use(express.urlencoded());
	app.use(express.methodOverride());
	app.use(express.cookieParser('secret'));
	app.use(passport.initialize());
	app.use(myMiddleware);
	app.use(app.router);
	app.use(express.static(path.join(__dirname, 'app/public')));

	// route initialization
	routes.init(app);

	// register passport strategies
	var strategies = require('./app/auth/strategies');
	_.forEach(strategies, function (strategy) {
		passport.use(strategy);
	});

	// development only
	if ('development' == app.get('env')) {
	  app.use(express.errorHandler());
	}
}