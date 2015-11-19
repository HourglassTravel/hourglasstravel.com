angular.module('hourglass', [ 'ngRoute' ])
  .config(mainConfig);

function mainConfig($routeProvider) {
  $routeProvider
    .when('/welcome', {
      templateUrl: 'app/components/welcome/welcomeView.html',
      title: 'Welcome',
      nav: true
    })
    .when('/main', {
      templateUrl: 'app/components/main/mainView.html',
      title: 'Main',
      nav: true
    })
    .when('/about', {
      templateUrl: 'app/components/about/aboutView.html',
      title: 'About Us',
      nav: true
    })
    .when('/contact', {
      templateUrl: 'app/components/contact/contactView.html',
      title: 'Contact',
      nav: true
    })
    .otherwise('/welcome');
}
