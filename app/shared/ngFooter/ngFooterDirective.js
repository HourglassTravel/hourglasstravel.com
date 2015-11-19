angular.module('hourglass')
  .directive('ngFooter', ngFooter)
  .controller('ngFooterController', ngFooterController);

function ngFooter() {
  return {
    templateUrl: 'app/shared/ngFooter/ngFooterView.html'
  };
}

function ngFooterController($route) {
  this.$route = $route;
}
