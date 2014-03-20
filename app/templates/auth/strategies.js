/*********************************************************************
*
*  auth/strategies
*  Authorization strategies implementation
*
*********************************************************************/

var	LocalStrategy = require('passport-local').Strategy;

var strategies = [];

// Login local
var local = new LocalStrategy(
	{
		usernameField: 'username',
		passwordField: 'password'
	}, 
	function (username, password, done) {
		// implement strategy
	}
);
strategies.push(local);

module.exports = strategies;