angular.module('hourglasstravel')
  .controller('getquoted', controller);

function controller($http) {

  this.data = {};
  this.resorts = ['Beach Club Villas', 'Beach Club Resort', 'BoardWalk Inn', 'Bay Lake Tower', 'BoardWalk Villas', '' ];
  this.times = ['Christmas', 'Spring Break', 'Labor Day', 'Winter', 'Summer', 'Spring', 'Fall', 'Halloween', 'Thanksgiving', 'Valentines Day', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  this.getLocation = function(val) {
    return $http.get('http://maps.googleapis.com/maps/api/geocode/json', {
      params: {
        address: val,
        sensor: false
      }
    }).then(function(response){
      return response.data.results.map(function(item){
        return item.formatted_address;
      });
    });
  };

  this.post = function() {
    var name = this.data.lastName + '.' + this.data.firstName;
    return $http.post('/api/quotes', {name: name, data: this.data}).then(function(data) {
      console.log(data);
    });
  };

  this.addToResorts = function(val) {
    this.data.visitedResorts = this.data.visitedResorts || [];
    if (this.resort && this.data.visitedResorts.indexOf(val) === -1) {
      this.data.visitedResorts.push(val);
    }
    this.resort = '';
  };

}