angular
    .module('main')
    .factory('stateChangeFactory', function($rootScope, $state, errorMessagesConstant){
        
        var _isLoading = false;
        
        var _goToErrorState = function(toStateTitle, errorMessage){
            $state.go('error', { errorInfo: { 
                        toStateTitle: toStateTitle, 
                        errorMessage: errorMessage } 
                    });
        };
        
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
            $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams) {
                console.log("$stateChangeSuccess");
                
                _isLoading = false;
                
                if(toState.name === 's404') {
                    _goToErrorState(toParams.path, errorMessagesConstant.s404);
                }
            });
            
            //
            // cb signature: event, toState, toParams, fromState, fromParams, error
            $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
                console.log("$stateChangeError");
                
                _isLoading = false;
                
                _goToErrorState(toState.data.title, error.statusText);
                
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