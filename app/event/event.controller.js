angular
    .module('main.event')
    .controller('event', function(eventData){
        
        var eventCtrl = this;
        eventCtrl.event = eventData;
        
    });