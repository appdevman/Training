// Inject one module into another --> example of inheritance (although not referred to as)
// this all runs on bootstrap/initialization/pageload

var myMod = angular.module('myMod', []); // create myMod module, the child in this inheritance design
myMod.value('modMsg', 'Hello from My Module'); // use value to create property with value
myMod.controller('controllerB', // create controller for this module
                 ['$scope', 'modMsg', // give builtin scope provider & custom property created above
                    function ($scope, msg) // run this function automatically using these args
                    {
                        $scope.message = msg; // this fires second, it is the second expression in the HTML file (using this module)
                    }
                 ]);

var myApp = angular.module('myApp', ['myMod']); // create myApp module, inherit myMod from above
myApp.value('appMsg', 'Hello from My App'); // use value to create property with value
myApp.controller('controllerA', // create controller for this module
                 ['$scope', 'appMsg', // give builtin scope provider & custom property created above
                    function ($scope, msg) // run this automatically
                    {
                        $scope.message = msg; // this fires first here, because it is the first expression in HTML file (using this module)
                    }
                 ]);

console.log(myApp.requires); // log the dependencies of uber myApp


// COMMENTS that came in sample code
//var controller = function($scope, msg) {
//  $scope.message = msg;
//};
//controller['$inject'] = ['$scope', 'appMsg'];
//myApp.controller('controllerA', controller);