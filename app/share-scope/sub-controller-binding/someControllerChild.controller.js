angular
    .module('main.shareScope')
    .controller('someControllerChild', function(){
       
       var someCtrlB = this;
       
       someCtrlB.name = "Bertil";
       
       
    });