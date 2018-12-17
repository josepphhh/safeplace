var app = angular.module('servicesApp');

app.factory('getBike', ['$http', function ($http) {
   var safeplace = {
// alla funktionerna är här
inputBike: function (city) {
   var url = 'https://bikewise.org:443/api/v2/incidents?page=1&proximity_square=100&q=' + city;
   return $http.get(url)
   .then(function (data) {
       return data.data;
   })

}
   };

   return safeplace;

}]);