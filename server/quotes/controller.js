
var model = require('./model');
var Promise = require('bluebird');
var model = Promise.promisifyAll(require('./model'));

module.exports = {
	get: function(req, res) {

	},
	post: function(req, res) {
		model.create(req.body)
			.then(function(lol) {
				console.log(lol);
				res.send(lol);
			});
	}
};
