angular
    .module('main.shareScope')
    .controller('controllerAsChild', function(){
        var ctrl = this;
        ctrl.computer = "PC";
        console.log(ctrl.computer);
    });