angular
    .module('main.start')
    .controller('start', function(){
       
       var startCtrl = this;
       
       startCtrl.fadeOutCallback = function(){
           console.log("fadeOutCallback ran in start controller");
       };
       
       startCtrl.search = function(){
           console.log("<--- FAKE SEARCH --->");
       };
       
    });