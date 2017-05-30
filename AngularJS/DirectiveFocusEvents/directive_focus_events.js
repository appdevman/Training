angular.module('myApp', []). //module
  controller('myController', function ($scope) {//child controller with scope dependency
      //provider intialization
    $scope.inputData = { input1: {value: "", state: ""}, // javascript 2-level array
                         input2: {value: "", state: ""} };

      //method to handle focus, using param value incoming from html (input1 or input2)
    $scope.focusGained = function (input) {
      $scope.inputData[input]['value'] = ''; // set 'value' for this button to empty string
      $scope.inputData[input]['state'] = 'Focus Gained'; // state 'state' for this tubbon to focus gained
    };

      //mehtod to handle blur, using param value incoming from html (input1 or input2)...and event object
    $scope.focusLost = function(event, input){
      var element = angular.element(event.target);// get the target
      var value = element.val(); // get value of target
      $scope.inputData[input]['value'] = value.toUpperCase(); //convert to uppercase and assign
      $scope.inputData[input]['state'] = "Focus Lost"; // assign state
    };
  });