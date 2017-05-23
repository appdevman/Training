// HTML template HIERARCHY example, showing a module's controllers, and how lower levels in the html have access to the upper, but not vice versa
angular.module('myApp', []). //module declaration
  controller('LevelA', function($scope) { //controller creation with scope initialization
    $scope.title = "Level A"
    $scope.valueA = 1; // top-level in HTML template: nested HTML levels below have access to this
    $scope.inc = function() { // increment function for prop val
      $scope.valueA++;
    };
  }).
  controller('LevelB', function ($scope) {//controller creation with scope initialization
    $scope.title = "Level B"
    $scope.valueB = 1; // mid-level in HTML tempalte:  HTML level below DOES have access to this, HTML level above DOES NOT.
    $scope.inc = function () {// increment function for prop val
      $scope.valueB++;
    };
  }).
  controller('LevelC', function ($scope) {//controller creation with scope initialization
    $scope.title = "Level C"
    $scope.valueC = 1; // lowest-level in HTML template: all levels above DO NOT have access.  There are no levels below in the template.
    $scope.inc = function () {// increment function for prop val
      $scope.valueC++;
    };
  });