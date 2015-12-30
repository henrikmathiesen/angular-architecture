angular
    .module('main')
    .factory('stateChangeFactory', function($rootScope, $state){
        
        var _isLoading = false;
        
        var handleStateEvents = function(){
            $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
                console.log("<### $stateChangeStart ###>");
                console.log(toState);
                if(toState.resolve) {
                    _isLoading = true;
                }
            });
                
            $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
                console.log("<### $stateChangeSuccess ###>");
                if(toState.resolve) {
                    _isLoading = false;
                }
            });
            
            $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
                console.log("<### $stateChangeError ###>");
                console.log(event);
                console.log(toState);
                console.log(toParams);
                console.log(fromState);
                console.log(fromParams);
                console.log(error);
                console.log("<---------------------------->");
                
                if(toState.resolve) {
                    _isLoading = false;
                }
                
                $state.go('error', { errorInfo: { toStateTitle: toState.data.title, errorMessage: error.statusText } });
            });
            
            $rootScope.$on('$stateNotFound', function (event, unfoundState, fromState, fromParams) {
                console.log("<### $stateNotFound ###>");
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