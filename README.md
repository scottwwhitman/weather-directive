<!--
Creator: Cory Fauver
Market: SF
-->

![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# Weather Directive Solution

### Notes

This solution has some pieces that deserve a bit more explanation:

1. Using the controller and controllerAs attributes in the directive definition object allows us to use the `vm` syntax we use in other controllers.

  ```javascript
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
  ```

1. The controller is defined separately and referred to in the directive definition object:

  ```javascript
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
  ```

1. This solution injects both `$http` and `$scope`. Here, `$scope` is used to access the `city` variable defined in the directive definition object's `scope`. In most other cases, the `vm` syntax is a full replacement for using `$scope`, but in this case, you need it to access the directive's `scope`. This was an unanticipated wrinkle that increased the degree of difficulty here.
