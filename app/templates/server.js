/*********************************************************************
*
*  server
*  server initialization
*
*********************************************************************/
var http = require('http'),
	app = require('./app');

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});