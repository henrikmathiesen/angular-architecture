angular
    .module('main.events')
    .controller('events', function(eventsData){
        
        var eventsCtrl = this;
        eventsCtrl.events = eventsData;
        
    });