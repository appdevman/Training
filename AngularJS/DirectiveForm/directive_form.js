angular.module('myApp', []).//module
  controller('myController', function($scope) {//controller & scope dependencies with provider intitialization
    $scope.cameras = [//create a collection of cameras in javascript format
      {make:'Canon', model:'70D', mp:20.2},
      {make:'Canon', model:'6D', mp:20},
      {make:'Nikon', model:'D7100', mp:24.1},
      {make:'Nikon', model:'D5200', mp:24.1}];
    $scope.cameraObj=$scope.cameras[0];//assign the first cell values to this provider in scope
    $scope.cameraName = 'Canon';//initialize to Cannon, but can change based on what radio is clicked
    $scope.cbValue = '';//initialize string of checkbox value provider to empty
    $scope.someText = '';//initialize string of someText provider to empty
  });