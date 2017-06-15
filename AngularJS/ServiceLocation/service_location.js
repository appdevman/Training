var app = angular.module('myApp', []); // create app and assign to var
app.controller('myController', ['$scope', '$location', // inject builtin location service
                                function($scope, location) { //pass same params to function initializer
  $scope.updateLocationInfo = function() { // create method to gather info from javascript location object, and assign to scope
    $scope.url = location.url();
    $scope.absUrl = location.absUrl();
    $scope.host = location.host();
    $scope.port = location.port();
    $scope.protocol = location.protocol();
    $scope.path = location.path();
    $scope.search = location.search();
    $scope.hash = location.hash();
  };
  $scope.changePath = function(){ // method to update path, then update scope
    location.path("/new/path");
    $scope.updateLocationInfo();
  };
  $scope.changeHash = function(){ // method to update hash, then update scope
    location.hash("newHash");
    $scope.updateLocationInfo();
  };
  $scope.changeSearch = function(){ // method to update search, then update scope
    location.search("p1", "newA");
    $scope.updateLocationInfo();
  };
  $scope.updateLocationInfo(); // part of controller init, so fires on new page load (or page refresh)
}]);
//http://localhost/ch09/service_location.html#/my/path/?p1=a&p2=b#myHash
