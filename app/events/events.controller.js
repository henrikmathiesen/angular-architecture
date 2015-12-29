angular
    .module('main.events')
    .controller('events', function($scope, eventsFactory){
        
        var eventsCtrl = this;
        eventsCtrl.events = [];
        
        var getEventsSuccess = function(data){
            console.log("success getting events");
            console.log(data);
            
            eventsCtrl.events = data;
        }
        
        var getEventsError = function(msg){
            console.log("error getting events");
        }
        
        var getEventsFinally = function(){
            console.log("finally done getting events");
        }
        
        eventsFactory
            .getEvents()
            .then(getEventsSuccess, getEventsError)
            .finally(getEventsFinally);
    });