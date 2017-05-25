angular.module('myApp', [])// module def
  .controller('myController', function($scope) {//one child controller
    $scope.Math = window.Math;// to use javascript math lib in jquery, just assign to jquery var
    $scope.myArr = [1]; // array with one cell of value 1
    $scope.removedArr = []; // empty array instantiation
  });