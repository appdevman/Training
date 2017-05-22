// this all runs during bootstrap & module initialization
// these are built-in AngularJS providers
var myMod = angular.module('myApp', []); // create our module
myMod.controller('controllerA', // define controller for our module
                 ['$scope', '$window', // inject two dependencies into the module (via controller)
                    function ($scope, $window)// and provide function using them --> this runs during page initialization!
                    {
                        $scope.message = "My Module Has Loaded!";// scope provider
                        $window.alert($scope.message);// window provider
                    }
                 ]);