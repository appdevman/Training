angular.module('myApp', []) //module
.controller('myController', function($scope) { //controller for module & child scope
    $scope.title="myApplication";//scope member initialization
  })
.directive('mybox', function() {//custom directive for app module
  return {
    transclude: true, //bind scope to directive, so usable in link function
    restrict: 'E', //limit to element-names only
    scope: {title: '@', bwidth: '@bwidth'}, //defines isolate scope with elements to initialize 
    template: '<div><span class="titleBar">{{title}}' + 
              '</span><div ng-transclude></div></div>', //store the transcluded content of the custom directive (what follows in the link section)
    link: function (scope, elem, attr, controller, transclude){ //what to drop in between the div tags earmarked as transclude
        elem.append('<span class="footer">' + scope.$parent.title + '</span>');//insert this span between the trascluded div
        elem.css('display', 'inline-block');//add this css to the trascluded div
        elem.css('width', scope.bwidth);// add more css to the transcluded div
      },
    };
});


//summary:
// transclusion here is allowing access to the scope members AND inserting inline content where designated in the template.
// this allows dynamic placement; in this case, as a footer dropped in with access to scope vals.