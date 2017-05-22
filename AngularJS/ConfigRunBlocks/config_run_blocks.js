// example using CONFIG to set run block instructions
// all this code runs in the order shown below on pageload

var myModule = angular.module('myApp', []); // create new module
myModule.config(function ($provide) // create config block, define function to run with $provide provider
                {
                    $provide.value("configTime", new Date()); // set this property value to current date
                    $provide.value("runTime", new Date()); // set this property value to current date
                    for (var x = 0; x < 10; x++) // just let some time go by, no assignment of anything here
                    {
                        var y = Math.sqrt(Math.log(x));
                    }  
                });

// run our module
myModule.run(function (configTime, runTime) {
  runTime.setTime((new Date()).getTime()); // set new value to runTime.  We let some time go by above, so this should be greater than configTime
});

// controller wire up
myModule.controller('controllerA', //name
                    ['$scope', 'configTime', 'runTime', // $scope provider, two properties in our module definition
                    function ($scope, configTime, runTime) // runs & supplies expressions in HTML with values, due to tying to $scope
                    {
                        $scope.configTime = configTime;
                        $scope.runTime = runTime;
                    }
                    ]); //The vals have now been tied to $scope--> html DOM updates --> expressions in HTML get the $scope vals
