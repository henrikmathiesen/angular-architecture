angular
    .module('main.events')
    .controller('events', function(eventData){
        
        var eventsCtrl = this;
        eventsCtrl.events = eventData;
        
    });