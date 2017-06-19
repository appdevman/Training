// this is the db-access service definition, which the controller injects & uses
var app = angular.module('dbAccess', []);//create module for the service
// design the Service-type Obj, necc. for service creation (on last line)
function DBAccessObj($http, $q) { // pass http & q built-in svcs
    // DEFINE 4 METHODS to expose, using $q deferred/then svc
    this.getUserData = function () {
    var deferred = $q.defer();
    $http.get('/get/user')
    .success(function(response, status, headers, config) {// example showing usage of all 4 built-in types of contextual service data
      deferred.resolve(response);
    });
    return deferred.promise;
  };
  this.updateUser = function(userInfo){
    var deferred = $q.defer();
    $http.post('/set/user', { userData: userInfo}).
    success(function(response, status, headers, config) {
      deferred.resolve(response);
    });
    return deferred.promise;    
  };
  this.getData = function(){
    var deferred = $q.defer();
    $http.get('/get/data')
    .success(function(response, status, headers, config) {
      deferred.resolve(response);
    });
    return deferred.promise;
  };
  this.updateData = function(data){
    var deferred = $q.defer();
    $http.post('/set/data', { data: data}).
    success(function(response, status, headers, config) {
      deferred.resolve(response);
    });
    return deferred.promise;    
  };
}
// declare/define the service, passing Obj as definition.  Use $q "promise/then" deferred functionality, and $http library of course
app.service('DBService', ['$http', '$q', DBAccessObj]);
