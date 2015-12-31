angular
    .module('main')
    .filter('statesForMainNavigationFilter', function(){
        return function(states){
            
            var filteredStates = [];
            
            // Filter out the first state since it is the default parent abstract state, and states with showInMenu = false
            for (var index = 0; index < states.length; index++) {
                if(index > 0 && states[index].data.showInMenu) {
                    filteredStates.push(states[index]);
                }
            }
            
            return filteredStates;
        };
    });