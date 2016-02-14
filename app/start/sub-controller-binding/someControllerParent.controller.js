angular
    .module('main.start')
    .controller('someControllerParent', function(){
       
       var someCtrlA = this;
       
       someCtrlA.name = "Adam";
       
    });