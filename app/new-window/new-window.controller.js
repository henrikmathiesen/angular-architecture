angular
    .module('main.newWindow')
    .controller('newWindow', function ($stateParams) {
        var newWindowCtrl = this;
        
        console.log("--------------------");
        console.log($stateParams.foo);
        console.log("--------------------");
        
        newWindowCtrl.prms = $stateParams.foo;
    });