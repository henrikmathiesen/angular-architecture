angular
    .module('main.shareScopeMore')
    .controller('shareScopeMore', function(){
        
        var shareScopeMoreCtrl = this;
        
        shareScopeMoreCtrl.rymdskepp = {
            skepp: { name: 'Falcon' },
            editSkepp: { foo: 'bar' }
        };
        
    });