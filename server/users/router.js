
var controller = require('./controller');

module.exports = function(app) {
	app.route('/')
		.get(controller.get)
		.post(controller.post);
};
