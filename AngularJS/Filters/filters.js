angular.module('myApp', [])// module
  .controller('myController', function ($scope) { //child controller
      // provider intializations
    $scope.currentDate = new Date();
    $scope.JSONObj = { title: "myTitle" };
    $scope.word="Supercalifragilisticexpialidocious";
    $scope.days=['Monday', 'Tuesday', 'Wednesday',
                 'Thursday', 'Friday'];
  });