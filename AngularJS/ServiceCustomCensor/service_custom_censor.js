var app = angular.module('myApp', []);//app declare
app.value('censorWords', ["can't", "quit", "fail"]);//value-type service
app.constant('repString', "****");//constant-type service
app.factory('censorF', ['censorWords', 'repString', //factory-type service, injecting service dependencies from above
                        function (cWords, repString) {
  return function(inString) { 
    var outString = inString;
    for(i in cWords){
      var regex = new RegExp(cWords[i], "ig");
      outString = outString.replace(regex, repString);
    }
    return outString;
  };
                        }]);

/////Obj for service (not factory pattern)
function CensorObj(cWords, repString) {
  this.censor = function(inString){
    var outString = inString;
    for(i in cWords){
      var regex = new RegExp(cWords[i], "ig");
      outString = outString.replace(regex, repString);
    }
    return outString;
  };
  this.censoredWords = function(){
    return cWords;
  };
}
app.service('censorS', ['censorWords', 'repString', CensorObj]);// service-type creation
app.controller('myController', ['$scope', 'censorF', 'censorS', //controller --> both factory & service services as dependencies
                                function($scope, censorF, censorS) {
  $scope.censoredWords = censorS.censoredWords();// values from member in CensorObj definition --> bring it to our scope
  $scope.inPhrase = ""; // new dynamic var
  $scope.censoredByFactory = censorF(""); // new dynamic var
  $scope.censoredByService = censorS.censor(""); //new dynamic var
  $scope.$watch('inPhrase', function(newValue, oldValue){ // watch any/all changes to textbox bound to this model inPhrase
    $scope.censoredByFactory = censorF(newValue);
    $scope.censoredByService = censorS.censor(newValue);    
  });
}]);
