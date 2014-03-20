/*********************************************************************
*
*  routes/yourmodule/module
*  routes definition for your module
*
*********************************************************************/

var controller = require('../controllers/yourmodule/module');

module.exports = function (app) {
	app.get('/api/module', controller.list);
	app.get('/api/module/:id', controller.retrieve);
	app.post('/api/module', controller.create);
	app.put('/api/module', controller.update);
	app.delete('/api/module', controller.delete);
};