angular.module('myApp', []). // app module
  controller('myController', ['$scope', '$http', // controller with child scope & injection of $http service
                              function($scope, $http) { //initializer function
    $scope.storeItems = {}; //empty array
    $scope.kitchenItems = {}; //empty array
    $scope.status = ""; // empty string
    $scope.resetStore = function(){ // method for handling click event in html, to resetStore
      $scope.status = "";//reset status
      $http.get('/reset/data')// GET --> call web service route to reset data
           .success(function(data, status, headers, config) { // use all 4 built-in available params from AngularJS
              $scope.storeItems = data;
            })
           .error(function(data, status, headers, config) {
              $scope.status = data;
            });
    };
    $scope.buyItem = function(buyItem){// method for handling click event to buy an item
      $http.post('/buy/item', {item:buyItem})// POST --> call web service route --> specify the value to POST in JavaScript format item: <value>
           .success(function(data, status, headers, config) {// all 4 built-in params
              $scope.storeItems = data; // param data to local provider
              if($scope.kitchenItems.hasOwnProperty(buyItem)){
                $scope.kitchenItems[buyItem] += 1;
              } else {
                $scope.kitchenItems[buyItem] = 1;
              }
              $scope.status = "Purchased " + buyItem;
            })
           .error(function(data, status, headers, config) {// all 4  built-in params
              $scope.status = data.msg;
            });
    };
    $scope.useItem = function(useItem){// method for handling item usage
      if($scope.kitchenItems[useItem] > 0){
        $scope.kitchenItems[useItem] -= 1;
      }
    };
  }]);