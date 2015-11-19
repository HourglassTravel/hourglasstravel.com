angular.module('hourglass')
  .directive('ngNavbar', ngNavbar)
  .controller('navbarController', navbarController);

function ngNavbar() {
  return {
    templateUrl: 'app/navbar/navbarView.html'
  };
}

function navbarController($route) {
  this.$route = $route;
}
