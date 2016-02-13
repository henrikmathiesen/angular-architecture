angular
    .module('main.start')
    .controller('directiveShareParent', function(){
        console.log("## directiveShareParent controller ##");
        
        var directiveShareParentCtrl = this;
        
        directiveShareParentCtrl.person = {
            food: 'Hamburger'
        };
    });