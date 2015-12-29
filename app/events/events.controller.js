angular
    .module('main.events')
    .controller('events', function($scope, eventData){
        
        var eventsCtrl = this;
        eventsCtrl.events = eventData;
        
    });