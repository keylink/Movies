
var movieApp = angular.module("movieApp", ['ngRoute']);

// Routes
movieApp.config(function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'views/main.html',
      controller: 'MovieController'
    })
    .when('/viewMovie', {
      templateUrl: 'views/viewMovie.html',
      controller: 'ViewMovie',
      resolve: {
        test: function ($route) { // function for pass value via router
          $route.current.params.test = true;
        }
      }
    })
    .when('/about', {
      templateUrl: 'views/info.html',
      controller: 'AboutMovie'
    })
    .otherwise({
      redirectTo: '/home'
    });
});

$('.carousel').carousel({
  interval: 2000,
  ride: true
});


