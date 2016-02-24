angular
    .module('main.shareScope')
    .controller('controllerAsParent', function(){
        var ctrl = this;
        ctrl.phone = "iPhone";
    });