angular
    .module('main')
    .factory('stateChangeFactory', function($rootScope){
        
        var handleStateEvents = function(){
            $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
                console.log("<### $stateChangeStart ###>");
            });
                
            $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
                console.log("<### $stateChangeSuccess ###>");
            });
            
            $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams) {
                console.log("<### $stateChangeError ###>");
                console.log(event);
                console.log(toState);
                console.log(toParams);
                console.log(fromState);
                console.log(fromParams);
                console.log("<---------------------------->");
            });
            
            $rootScope.$on('$stateNotFound', function (event, toState, toParams, fromState, fromParams) {
                console.log("<### $stateNotFound ###>");
            });
        };
        
        return {
            handleStateEvents: handleStateEvents
        };
        
    });