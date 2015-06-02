angular.module('hourglasstravel', [
    'ngRoute',
    'ngAnimate',
    'ui.bootstrap'
  ]).config(Config);

function Config($routeProvider) {
  $routeProvider
    .when('/',          { templateUrl: 'app/home/view.html' })
    .when('/getquoted', { templateUrl: 'app/getquoted/view.html' })
    .when('/about',     { templateUrl: 'app/about/view.html' })
    .when('/contact',   { templateUrl: 'app/contact/view.html' });

}
