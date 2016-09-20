angular.module('weatherApp')
  .directive('currentWeather', currentWeather);


function currentWeather(){
  var directive = {
    restrict: 'E',
    scope: {
      city: '@'
    },
    replace: true,
    templateUrl: 'templates/weatherCard.html',
    controllerAs: 'weatherCardCtrl',
    controller: weatherCardController
  };

  weatherCardController.$inject = ['$http', '$scope'];
  function weatherCardController($http, $scope){
    var vm = this;
    var url="http://api.openweathermap.org/data/2.5/weather?mode=json&cnt=7&units=imperial&q=";
    var apikey = "&appid=" + '284c1c2d36e318ea0a389b743d94c747';
    vm.getWeather = function(city){
      console.log(url + city + apikey);
      $http({
        method: 'GET',
        url: url + city + apikey
      }).then(function(response){
          console.log(response);
          vm.weather = response.data;
        }, function(err){
          console.log(err);
        });
    };
    vm.getWeather($scope.city);
  };

  return directive;
}
