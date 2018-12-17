var app = angular.module('servicesApp', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider){
   $routeProvider
   .when('/', {
       templateUrl: 'templates/home.html',
       controller: 'HomeCtrl'
   })
   .when('/bike', {
       templateUrl: 'templates/bike.html',
       controller: 'BikeCtrl'
   })
   .when('/bike-results/:result', {
       templateUrl: 'templates/bike-results.html',
       controller: 'BikeResultsCtrl'
   })
});

