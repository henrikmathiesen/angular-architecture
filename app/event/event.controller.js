angular
    .module('main.event')
    .controller('event', function(eventData, $state){
        
        var eventCtrl = this;
        eventCtrl.event = eventData;
        
        if(!eventCtrl.event) {
            $state.go('events');
        }
        
    });