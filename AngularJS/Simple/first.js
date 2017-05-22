// This runs on page-load (lines 4-8), except the updateMessage click handler (lines 9-10).
// So initialization takes place and the heading portion of the expression is injected into HTML during page-load.
// Clicking the button runs the event handler, showing the values from the textboxes, overriding and updating scope
var firstApp = angular.module('firstApp', []); // create the application
firstApp.controller('FirstController', function ($scope) { // create controller & underlying scope
    $scope.first = 'Some'; // assign a value to underlying scope--> it will be injected into the textbox due to being wired to model
    $scope.last = 'One'; // same here for this
    $scope.heading = 'Message: '; // assign value to heading prop of scope
    $scope.updateMessage = function () { // event hanlder for button click
        $scope.message = 'Hello ' + $scope.first + ' ' + $scope.last + '!'; // pull current values from each textbox & assign to message prop
    };
});