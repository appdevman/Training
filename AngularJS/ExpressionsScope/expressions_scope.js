angular.module('myApp', [])// module
  .controller('myController', function ($scope) {// one child controller
      // provider intialization
    $scope.speed = 'Slow';
    $scope.vehicle = 'Train';
    $scope.newSpeed = 'Hypersonic';
    $scope.newVehicle = 'Plane';

      // function definitions
    $scope.upper = function(aString){
      return angular.uppercase(aString);
    };
    $scope.lower = function(aString){
      return angular.lowercase(aString);
    };
    $scope.setValues = function(speed, vehicle){// massages providers
      $scope.speed = speed;
      $scope.vehicle = vehicle;
    };
  });