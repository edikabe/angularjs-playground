var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/demos/routing/pages/home.html',
    })
    .when('/page2', {
      templateUrl: '/demos/routing/pages/page2.html'
    })
    .when('/the_end', {
      templateUrl: '/demos/routing/pages/the_end.html'
    });
}]);
