angular
    .module('main.error')
    .controller('error', function($stateParams){
        var errorCtrl = this;
        
        errorCtrl.stateWithError = $stateParams.errorInfo.toStateTitle;
        errorCtrl.errorMessage = $stateParams.errorInfo.errorMessage;
        
    });