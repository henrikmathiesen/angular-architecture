angular
    .module('main.events')
    .factory('eventsFactory', function($http, apiUrlConstant){
        
        var getEvents = function(){
            var extract = function(response){
                return response.data;
            };
            
            return $http
                    .get(apiUrlConstant + 'getevents')
                    .then(extract);
        };
        
        
        return {
            getEvents: getEvents
        }
        
    });
        