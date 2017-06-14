angular.module('myApp', [])//app module
.controller('myController', function ($scope) {//controller with child scope
  $scope.mColors = ['red', 'green', 'blue'];//colors array
  $scope.myColor = ''; //initialize a color string var to empty
  $scope.hits = 0;//initialize to zero
  $scope.misses = 0;
  $scope.changes = 0;
  $scope.myObj = {color: '', hits: '', misses: ''}; //create javascript object with properties' to empty string vals
  $scope.setColor = function (color){ // event handler method for setting color property val
    $scope.myColor = color;
  };
  $scope.hit = function (){ // event handler method for setting hit property val
    $scope.hits += 1;
  };
  $scope.miss = function () {// event handler method for setting miss property val
    $scope.misses += 1;
  };
  $scope.$watch('myColor', function (newValue, oldValue){//watch myColor scope variable for any changes anywhere
    $scope.myObj.color = newValue;//take passed newValue and assign to javascript object property color
  });
  $scope.$watchGroup(['hits', 'misses'], function (newValue, oldValue){//watch 'hits' & 'misses' as a group.  newValue is an array
    $scope.myObj.hits = newValue[0]; //assign 'hits' to javascript object property for hits
    $scope.myObj.misses = newValue[1];//assign 'misses' to javascript object property for hits
  });
  $scope.$watchCollection('myObj', function (newValue, oldValue){//watch all properties in javascript object myObj for changes
    $scope.changes += 1; //increment this scope var value
  });
});