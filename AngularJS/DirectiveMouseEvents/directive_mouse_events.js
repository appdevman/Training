angular.module('myApp', []).//module
  controller('myController', function ($scope) {//child controller with scope dependency
      //provider initialization
    $scope.mouseInfo = {};
    $scope.lastClickInfo = {};

      //mouse click function to handle passed event
      //dynamically create provider fields and assign event details
    $scope.mouseClick = function(event){
      $scope.lastClickInfo.clientX = event.clientX;
      $scope.lastClickInfo.clientY = event.clientY;
      $scope.lastClickInfo.screenX = event.screenX;
      $scope.lastClickInfo.screenY = event.screenY;
    };

      //function for mouse move event handling
      //dynamically create provider fields and assign event details
    $scope.mouseMove = function(event){
      $scope.mouseInfo.clientX = event.clientX;
      $scope.mouseInfo.clientY = event.clientY;
      $scope.mouseInfo.screenX = event.screenX;
      $scope.mouseInfo.screenY = event.screenY;
    };
  });