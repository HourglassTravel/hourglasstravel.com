angular.module('hourglasstravel')
  .controller('getquoted', controller);

function controller($http) {

  this.data = {};

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
    return $http.post('/api/getquoted', this.data).then(function(data) {
      console.log(data);
    });
  };

}