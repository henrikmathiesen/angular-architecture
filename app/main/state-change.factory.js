angular
    .module('main')
    .factory('stateChangeFactory', function($rootScope, $state){
        
        var _isLoading = false;
        
        var handleStateEvents = function(){
            
            //
            // event, toState, toParams, fromState, fromParams
            $rootScope.$on('$stateChangeStart', function (event, toState) {
                console.log("$stateChangeStart");
                if(toState.resolve) {
                    _isLoading = true;
                }
            });
            
            //
            // cb signature: event, toState, toParams, fromState, fromParams
            $rootScope.$on('$stateChangeSuccess', function (event, toState) {
                console.log("$stateChangeSuccess");
                if(toState.resolve) {
                    _isLoading = false;
                }
            });
            
            //
            // cb signature: event, toState, toParams, fromState, fromParams, error
            $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
                console.log("$stateChangeError");
                if(toState.resolve) {
                    _isLoading = false;
                }
                
                $state.go('error', { errorInfo: { toStateTitle: toState.data.title, errorMessage: error.statusText } });
            });
            
            //
            // cb signature: event, unfoundState, fromState, fromParams
            $rootScope.$on('$stateNotFound', function () {
                console.log("$stateNotFound");
            });
            
        };
        
        var getIsLoading = function(){
            return _isLoading;
        };
        
        return {
            handleStateEvents: handleStateEvents,
            getIsLoading: getIsLoading
        };
        
    });