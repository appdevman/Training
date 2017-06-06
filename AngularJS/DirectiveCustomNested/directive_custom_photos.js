
angular.module('myApp', [])
    //parent directive container
.directive('myPhotos', function() {
  return {
    restrict: 'E',// restrict to element
    transclude: true, //bind scope to link function
    scope: {}, //dependency child scope to directive
    controller: function($scope) { //dependency controller to this directive, initialize function with scope
      var photos = $scope.photos = [];  //initialize an empty collection var

        //method handler for link clicks, setting all photos to false, finallyy setting current to selected
      $scope.select = function (photo) {
        angular.forEach(photos, function(photo) {
          photo.selected = false;
        });
        photo.selected = true; 
      };

        //local controller method:  for adding photo to collection
      this.addPhoto = function(photo) {
        photos.push(photo);
      };
    },
    templateUrl: 'my_photos.html' //template file via URL, robust with expressions & transclude declaration
  };
})
    //child directive, children to container
.directive('myPhoto', function() {
  return {
    require: '^myPhotos', // inheritance: must be child of myPhotos parent
    restrict: 'E', // restrict to element
    transclude: true, // bind scope to link function
    scope: { title: '@'}, // pull & make accessable the value provided in attribute by developer
    link: function(scope, elem, attrs, photosControl) { // photosControl refers to parent directive via inheritance-type syntax
      photosControl.addPhoto(scope);//add photo to scope
    },
    template: '<div ng-show="selected" ng-transclude></div>' // show the selected photo in this div, via scope property
  };
});