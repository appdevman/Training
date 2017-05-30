angular.module('myApp', []). //module
  controller('myController', function($scope) {//child controller with scope dependency
      //scope provider initialization
      $scope.colors = ['red', 'green', 'blue'];
    $scope.myStyle = { "background-color": 'blue' };
    $scope.days=['Monday', 'Tuesday', 'Wednesday',
                 'Thursday', 'Friday'];
    $scope.msg="Dynamic Message from the model";
  });