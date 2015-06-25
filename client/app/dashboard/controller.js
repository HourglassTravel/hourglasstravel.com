
angular.module('hourglasstravel')
  .controller('dashboard', controller);

function controller($http) {

	this.quotes = [];

	this.getQuotes = function() {
		var self = this;
		return $http.get('/api/quotes')
			.then(function(response) {
				self.quotes = response.data;
			});
	};

	this.getQuotes();

};
