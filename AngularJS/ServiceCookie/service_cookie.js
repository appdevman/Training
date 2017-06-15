var app = angular.module('myApp', ['ngCookies']); // create app module and load ngCookies
app.controller('myController', ['$scope', '$cookieStore', //inject cookieStore into controller
                                function($scope, cookieStore) { // initializer with scope & cookieStore
        // get, put, & remove methods for managing cookies
      $scope.setCookie = function () {
      if ($scope.favCookie === 'None'){
        cookieStore.remove('myAppCookie');
      }else{
        cookieStore.put('myAppCookie', {flavor:$scope.favCookie});
      } 
      $scope.myFavCookie = cookieStore.get('myAppCookie');
    };
    $scope.initCookieValue = function(){
      var cookie = cookieStore.get('myAppCookie');
      if (cookie){
        $scope.favCookie = cookie.flavor;
      } else {
        $scope.favCookie = 'None';
      }
      $scope.myFavCookie = $scope.favCookie;
    };
    $scope.initCookieValue();
  }]);
