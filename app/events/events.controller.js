angular
    .module('main.events')
    .controller('events', function($scope, eventsFactory){
        
        var eventsCtrl = this;
        eventsCtrl.events = [];
        eventsCtrl.getEventsErrorMsg = '';
        
        var getEventsSuccess = function(data){
            console.log("success getting events");
            console.log(data);
            
            eventsCtrl.getEventsErrorMsg = '';
            eventsCtrl.events = data;
        }
        
        var getEventsError = function(msg){
            console.log("error getting events");
            eventsCtrl.getEventsErrorMsg = 'error getting events';
        }
        
        var getEventsFinally = function(){
            console.log("finally done getting events");
        }
        
        eventsFactory
            .getEvents()
            .then(getEventsSuccess, getEventsError)
            .finally(getEventsFinally);
    });