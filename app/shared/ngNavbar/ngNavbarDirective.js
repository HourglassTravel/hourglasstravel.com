angular.module('hourglass')
  .directive('ngNavbar', ngNavbar)
  .controller('ngNavbarController', ngNavbarController);

function ngNavbar() {
  return {
    templateUrl: 'app/shared/ngNavbar/ngNavbarView.html'
  };
}

function ngNavbarController($route) {
  this.$route = $route;
}
