angular.module('hourglass')
  .directive('ngFooter', ngFooter);

function ngFooter() {
  return {
    templateUrl: 'app/footer/footerView.html'
  };
}
