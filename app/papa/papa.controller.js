angular
    .module('main.papa')
    .controller('papa', function(){
        var papaCtrl = this;
        console.log("PAPA CTRL");
        
        papaCtrl.foo = "Bar!";
        
    });