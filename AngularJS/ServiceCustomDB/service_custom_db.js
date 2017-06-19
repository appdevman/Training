// this file is the controller, that uses the db-access service 
var app = angular.module('myApp', ['dbAccess']); // create module/app, inject dbAccess service
app.controller('myController', ['$scope', 'DBService',  // initialize controller, create child scope & instance of DBService
                                function($scope, db) {
  $scope.status = ""; // dynamic creation of string property

  $scope.getUser = function(){    // creation of method to GET user info
    db.getUserData().then(function(response){ // call method of dbAccess service
      $scope.userInfo = response; // assign response to this dynamically created var
      $scope.status = "User Data Retrieve."; 
    });
  };
  $scope.getData = function(){    
    db.getData().then(function(response){
      $scope.data = response;
      $scope.status = "User Data Retrieve.";
    });
  };

  $scope.updateUser = function(){ // creation of method to POST & update user info; ng-click event
    db.updateUser($scope.userInfo).then(function(response){
      $scope.status = response.status;
    });
  };
  $scope.updateData = function () {// creation of method to POST & data info; ng-click event
    db.updateData($scope.data).then(function(response){
      $scope.status = response.status;
    });
  };

  $scope.getUser(); // calling local method, fires on page load. So scope has userInfo available, for the HTML ng-model bindings
  $scope.getData(); // calling local method, fires on page load. So scope has info for ng-click & ng-model bindings on dataS
}]);
