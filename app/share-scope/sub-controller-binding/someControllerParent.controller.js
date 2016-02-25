angular
    .module('main.shareScope')
    .controller('someControllerParent', function(){
       
       var someCtrlA = this;
       
       someCtrlA.name = "Adam";
       
    });