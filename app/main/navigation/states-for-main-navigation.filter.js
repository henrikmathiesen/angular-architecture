angular
    .module('main')
    .filter('statesForMainNavigationFilter', function(){
        return function(states){
            
            // Remove the abstract state, at index 0, from the array
            states.shift();
            
            // Remove states that does not have an URL
            for (var index = 0; index < states.length; index++) {
                if(!states[index].url) {
                    states.splice([index], 1);
                }
            }
            
            // Remove states that is a sub state
            for (var index = 0; index < states.length; index++) {
                if(states[index].name.indexOf('.') > -1) {
                    states.splice([index], 1);
                }
            }
            
            return states;
        }
    });