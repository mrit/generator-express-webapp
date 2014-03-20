'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var ExpressWebappGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // have Yeoman greet the user
    this.log(this.yeoman);

    // replace it with a short and sweet description of your generator
    this.log(chalk.magenta('You\'re using the fantastic Express Webapp generator.'));

    done();
  },

  app: function () {
    this.mkdir('app');
    this.mkdir('app/auth');
    this.mkdir('app/controllers');
    this.mkdir('app/contorllers/yourmodule');
    this.mkdir('app/midddlewares');
    this.mkdir('app/routes');
    this.mkdir('app/routes/yourmodule');
    this.mkdir('app/public');
    this.mkdir('app/public/images');
    this.mkdir('app/public/css');
    this.mkdir('app/public/js');
    this.mkdir('app/views');

    // main files
    this.copy('app.js', 'app.js');
    this.copy('server.js', 'server.js');
    this.copy('config.js', 'config.js');
    this.copy('_config.json', 'config.json');
    this.copy('_package.json', 'package.json');
    this.copy('_bower.json', 'bower.json');

    // bootstrap files
    this.copy('auth/strategies.js', 'app/auth/strategies.js');
    this.copy('controllers/yourmodule/module.js', 'app/controllers/yourmodule/module.js');
    this.copy('middlewares/yourmiddleware.js', 'app/middlewares/yourmiddleware.js');
    this.copy('routes/index.js', 'app/routes/index.js');
    this.copy('routes/yourmodule/module.js', 'app/routes/yourmodule/module.js');
  },

  projectfiles: function () {
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
  }
});

module.exports = ExpressWebappGenerator;