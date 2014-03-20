/*********************************************************************
*
*  routes/index
*  routes initialization file
*
*********************************************************************/

module.exports = {
	init: function (app) {
		// initializing module routes
		require('./yourmodule/module')(app);
	}
};