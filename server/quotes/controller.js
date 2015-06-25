
var model = require('./model');
var Promise = require('bluebird');
var model = Promise.promisifyAll(require('./model'));

module.exports = {
	get: function(req, res) {
		model.find()
			.then(function(data) {
				console.log(data);
				res.send(data);
			});
	},
	post: function(req, res) {
		model.create(req.body)
			.then(function(lol) {
				console.log(lol);
				res.send(lol);
			});
	}
};
