angular.module('myApp', [])// module
    //custom filter defined & assuming different names down the chain: "censor"-->"censorFilter"-->"myCensorFilter"
  .filter('censor', function() { // 1. first named as 'censor'
    return function(input, replacement) {
      var cWords = ['bad', 'evil', 'dark'];
      var out = input;
      for(var i=0; i<cWords.length; i++){
        var regex = new RegExp(cWords[i], "gi");
        out = out.replace(regex, replacement);
      }
      return out;
    };
  })
    // child controller, $scope & filter dependency
  .controller('myController', ['$scope', 'censorFilter', // 2. secondly named as 'censorFilter' by AngularJS convention, tied to 'censor'  
                              function($scope, myCensorFilter) { // 3. thirdly named & injected as 'myCensorFilter'
    // provider initialization to injected scope
    $scope.censorText = "***";
    $scope.phrase="This is a bad phrase.";
    $scope.txt = "Click to filter out dark and evil.";

    // Expression method to apply 'censor' filter and assign to scope.txt
    $scope.filterText = function () {
      $scope.txt = myCensorFilter($scope.txt, '<<censored>>'); // 4. invoke filter with injected name
    };
  }]);
// SUMMARY: confusing at first, because of tracking the name of the filter.
// 1. define and name the filter
// 2. upon controller injection, param name is <definedNameFromStep1>+"Filter"    censor+Filter== censorFilter
// 3. function param mapping--> putting 'my' as prefix by author of book, dont understand why cant use censorFilter, maybe a reason
// 4. invoking the filter with myCensorFilter.....the name used in function for injection into controller