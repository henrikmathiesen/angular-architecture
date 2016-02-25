angular
    .module('main.shareScope')
    .controller('directiveShared', function($scope){
        
        var ctrl = this;
        
        console.log("directiveShared controller");
        
        ctrl.person = {
            name: 'Henrik',
            food: 'pizza',
            drink: 'juice'
        };
        
        console.log($scope);
        
    });