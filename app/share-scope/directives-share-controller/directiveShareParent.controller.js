angular
    .module('main.shareScope')
    .controller('directiveShareParent', function(){
        console.log("## directiveShareParent controller ##");
        
        var directiveShareParentCtrl = this;
        
        directiveShareParentCtrl.person = {
            food: 'Hamburger'
        };
    });