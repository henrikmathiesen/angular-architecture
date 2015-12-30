angular
    .module('main')
    .filter('statesForMainNavigationFilter', function(){
        return function(states){
            
            // Remove the abstract state, at index 0, from the array
            states.shift();
            
            // var _stateDoesNotHaveAnUrl = function(state){
            //     return state.url !== true;
            // };
            // 
            // var _stateIsThes404State = function(state){
            //     return state.name === 's404';
            // };
            // 
            // var _stateIsNestedState = function(state){
            //     return state.name.indexOf('.') > -1;
            // };
            // 
            // for (var i = 0; i < states.length; i++) {
            //     console.log(i);
            //     if(_stateDoesNotHaveAnUrl(states[i]) || _stateIsThes404State(states[i]) || _stateIsNestedState(states[i])) {
            //         console.log("=== SPLICING ===");
            //         console.log(states[i]);
            //         console.log("=== /SPLICING ===");
            //         states.splice([i], 1);
            //         //continue;
            //     }
            // }
            
            return states;
        };
    });