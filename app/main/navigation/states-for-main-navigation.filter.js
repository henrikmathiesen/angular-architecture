angular
    .module('main')
    .filter('statesForMainNavigationFilter', function(){
        return function(states){
            
            // Remove the abstract state, at index 0, from the array
            states.shift();
            
            // Remove states that does not have an URL
            for (var i = 0; i < states.length; i++) {
                if(!states[i].url) {
                    states.splice([i], 1);
                }
            }
            
            // Remove states that is a sub state
            for (var j = 0; j < states.length; j++) {
                if(states[j].name.indexOf('.') > -1) {
                    states.splice([j], 1);
                }
            }
            
            return states;
        };
    });