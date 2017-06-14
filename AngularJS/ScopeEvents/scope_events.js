angular.module('myApp', []).//app module
  controller('Characters', function($scope) {// parent controller of this module
    $scope.names = ['Frodo', 'Aragorn', 'Legolas', 'Gimli'];// some names in an array
    $scope.currentName = $scope.names[0]; // grab the first in the array
    $scope.changeName = function() { // event handler function to change name
        $scope.currentName = this.name; // dynamic 'name' property comes from the ng-repeat directive in HTML for the span element. 
                                        // Here we pull the value from 'this'--> what was clicked on   'name'--> value of the attribute
      $scope.$broadcast('CharacterChanged', this.name); // broadcast an event downwards through the scope hierarchy that this handler fired by user
        // continued--> give the listener name, & provide the dynamic html value this.name (as explained above) as a param, so the subscribers
        //              can work with it, and render accordingly
    };
    $scope.$on('CharacterDeleted', function(event, removeName){// event listener for the child controller's emit for deleteChar event
      var i = $scope.names.indexOf(removeName);// get index of value to remove from array
      $scope.names.splice(i, 1); // remove the name from this scope's master array
      $scope.currentName = $scope.names[0]; // set a default value for current name (to reset page at this level)
      $scope.$broadcast('CharacterChanged', $scope.currentName);// broadcast an event downwards through the scope hierarchy that a char changed,
                                                                // and provide the new currentName, so the subscriber can render the new values
    });
  }).
  controller('Character', function($scope) {// child controller of this module
    $scope.info = {'Frodo': { weapon: 'Sting', // 2-level array of info for this specific scope
                              race: 'Hobbit'},
                   'Aragorn': { weapon: 'Sword', 
                                race: 'Man'},
                   'Legolas': { weapon: 'Bow', 
                                race: 'Elf'},
                   'Gimli': { weapon: 'Axe', 
                              race: 'Dwarf'}};
    $scope.currentInfo = $scope.info['Frodo']; // get weapon/race info for frodo
    $scope.$on('CharacterChanged', function(event, newCharacter){ // event listener for characterChanged event in parent controller
      $scope.currentInfo = $scope.info[newCharacter]; // use passed newCharacter info to place values in current scope array for current info
    }); 
    $scope.deleteChar = function() { // event handler to delete a char
      delete $scope.info[$scope.currentName]; // delete the current name from the parent scope, from this controller's local info array
      $scope.$emit('CharacterDeleted', $scope.currentName);// emit event upwards through the scope hierarchy that listener in parent will work with
    };
  });