angular
    .module('main.shareScope')
    .controller('directiveShareParent', function($scope){
        console.log("## directiveShareParent controller ##");
        
        var directiveShareParentCtrl = this;
        
        directiveShareParentCtrl.person = {
            food: 'Hamburger'
        };
        
        console.log($scope);
    });