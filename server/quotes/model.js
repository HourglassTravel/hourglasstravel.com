
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	name: String,
	data: {
		preferredFormOfContact: String,
		preferredTimeToCall: String,
		visitedResorts: [String],
		tripFrequency: String,
		firstName: String,
		lastName: String,
		tripType: String,
		address: String,
		phone: String,
		email: String,
		dob: String,
	}
});

module.exports = mongoose.model('Quote', schema);
