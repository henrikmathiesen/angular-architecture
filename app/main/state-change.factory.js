angular
    .module('main')
    .factory('stateChangeFactory', function($rootScope, $state, errorMessagesConstant){
        
        var stateChangeFactory = {};
        
        var isLoading = false;
        
        var goToErrorState = function(toStateTitle, errorMessage){
            $state.go('error', { errorInfo: { 
                        toStateTitle: toStateTitle, 
                        errorMessage: errorMessage } 
                    });
        };
        
        stateChangeFactory.handleStateEvents = function(){
            
            //
            // event, toState, toParams, fromState, fromParams
            $rootScope.$on('$stateChangeStart', function (event, toState) {
                console.log("$stateChangeStart");
                if(toState.resolve) {
                    isLoading = true;
                }
            });
            
            //
            // cb signature: event, toState, toParams, fromState, fromParams
            $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams) {
                console.log("$stateChangeSuccess");
                
                isLoading = false;
                
                if(toState.name === 's404') {
                    goToErrorState(toParams.path, errorMessagesConstant.s404);
                }
            });
            
            //
            // cb signature: event, toState, toParams, fromState, fromParams, error
            $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
                console.log("$stateChangeError");
                
                isLoading = false;
                
                goToErrorState(toState.data.title, error.statusText);
                
            });
            
            //
            // cb signature: event, unfoundState, fromState, fromParams
            $rootScope.$on('$stateNotFound', function () {
                console.log("$stateNotFound");
            });
            
        };
        
        stateChangeFactory.getIsLoading = function(){
            return isLoading;
        };
        
        return stateChangeFactory;
        
    });