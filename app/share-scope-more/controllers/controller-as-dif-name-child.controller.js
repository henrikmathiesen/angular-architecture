angular
    .module('main.shareScopeMore')
    .controller('controllerAsDifNameChild', function(){
        
        var controllerAsDifNameChildCtrl = this;
        
        controllerAsDifNameChildCtrl.childName = "Bertil";
        
        controllerAsDifNameChildCtrl.inputText = "";
    });