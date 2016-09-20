angular.module('weatherApp')
  .controller('weatherController', weatherController);

function weatherController(){
  var vm = this;
  vm.cities = ['San Francisco',  'Oakland', 'San Jose', 'Sacramento', 'Fresno', 'Bakersfield', 'Los Angeles', 'San Diego']
}
