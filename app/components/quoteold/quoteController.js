angular.module('hourglass')
  .controller('quoteController', quoteController);

function quoteController() {
  var self = this;
  
  self.types = [
    {
      name: 'Walt Disney World'
    },
    {
      name: 'Disney Land California'
    },
    {
      name: 'Disney Aulani'
    },
    {
      name: 'Adventures by Disney'
    }
  ]
}
