//notice how when the inputs change, vals change automatically
//however valueC only changes when the button is clicked

angular.module('myApp', []). // new module
  controller('SimpleTemplate', function($scope) { // controller tied to this module
    $scope.valueA = 5; // initialization of props
    $scope.valueB = 7;
    $scope.valueC = 12;

    // function wired to button click event.  $event passed from button but not used here; can use to get context info about the event.
    $scope.addValues = function(v1, v2, e) {
      $scope.valueC = v1 + v2;
    };
  });