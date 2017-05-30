//this routine keeps track of all keys pressed in between ENTER keypress
//upon pressing ENTER, routine clears (tracking) and starts over

angular.module('myApp', []).//module
  controller('myController', function ($scope) {//child controller with scope dependency
      //provider initialization
    $scope.storedString = '';
    $scope.keyInfo = {};
    $scope.keyStrokes = [];
    $scope.keyState = 'Not Pressed';
      //method for handling events associated with pressing keyboard buttton
    $scope.keyPressed = function(event){ //event param coming in
      if (event.keyCode == 13){//check event obj for key pressed by code (13 is enter key)
        var element = angular.element(event.target);//what form element got the action
        $scope.storedString = element.val();//value of the form element
        element.val('');//clear value
        $scope.keyInfo.keyCode = event.keyCode;//assign keycode to our own value provider
        $scope.keyStrokes = [];//clear our array
        $scope.keyState = 'Enter Pressed'; //indicate the ENTER key was pressed
      } else {
          //otherwise indicate ENTER key was not pressed
        $scope.keyInfo.keyCode = event.keyCode;//what was pressed
        $scope.keyStrokes.push(event.keyCode);//put it in our array that is tracking keystrokes
        $scope.keyState = 'Not Pressed'; //indicate enter was not pressed
      }
    };
  });