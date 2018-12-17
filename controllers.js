var app = angular.module('servicesApp');

app.controller('HomeCtrl', ['$scope', function ($scope) {

}]);

app.controller('BikeCtrl', ['$scope', '$location', function ($scope, $location) {
   $scope.bike = function (city) {
       $location.path('/bike-results/' + city);


   }

}]);

app.controller('BikeResultsCtrl', ['$scope', '$routeParams', 'getBike', function ($scope, $routeParams, getBike) {


   var city = $routeParams.result;
   getBike.inputBike(city)
       .then(function (cityResults) {
           console.log(cityResults);
           console.log(cityResults);
           $scope.results = cityResults.incidents;
           $scope.location = city
           // $scope.description = cityResults.current.condition.text
           // $scope.image = cityResults.current.condition.icon
           // $scope.safe_ = cityResults.current.safe


       })
}]);