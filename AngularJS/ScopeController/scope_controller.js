angular.module('myApp', []). //new module
  value('start', 200). // specific value for it
  controller('Counter', ['$scope', 'start',  // specific controller for it, with $scope & other initialization
                          function($scope, start) { 
    $scope.start = start; // initialize to 200
    $scope.current = start; // initialize to 200
    $scope.difference = 0; // intialize to zero
    $scope.change = 1; // initialize to one

    // FUNCTION defs
    $scope.inc = function() { // a function definition for the controller
      $scope.current += $scope.change; // increment 'current' based on scope.change
      $scope.calcDiff(); // call to do diff
    };
    $scope.dec = function() { // another func def
      $scope.current -= $scope.change; // decrement 'current' based on scope.change
      $scope.calcDiff(); // calcDiff
    };
    $scope.calcDiff = function() { // a hinge function because it sets the 'difference' prop value
      $scope.difference = $scope.current - $scope.start; // do math and assign to 'difference' prop
    };
  }]);