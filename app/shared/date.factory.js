angular
    .module('main.shared')
    .factory('dateFactory', function (weekDaysConstant) {
        
        var dateFactory = {};

        var constructDateAndTime = function () {
            var date = new Date();

            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            var day = date.getDate();

            var hours = date.getHours();
            var minutes = date.getMinutes();
            var seconds = date.getSeconds();
            
            var weekDays = [
                weekDaysConstant.sunday, 
                weekDaysConstant.monday, 
                weekDaysConstant.tuesday, 
                weekDaysConstant.wednesday, 
                weekDaysConstant.thursday, 
                weekDaysConstant.friday, 
                weekDaysConstant.saturday
            ];  

            var currentDate = {
                timeWithSeconds: ((hours < 10) ? ("0") : ("")) + hours + ":" + ((minutes < 10) ? ("0") : ("")) + minutes + ":" + ((seconds < 10) ? ("0") : ("")) + seconds,
                timeWithoutSeconds: ((hours < 10) ? ("0") : ("")) + hours + ":" + ((minutes < 10) ? ("0") : ("")) + minutes,
                date: year + "-" + ((month < 10) ? ("0") : ("")) + month + "-" + ((day < 10) ? ("0") : ("")) + day,
                weekDay: weekDays[date.getDay()]
            };
            
            return currentDate;
        };
        
        dateFactory.getTime = function(){
            return constructDateAndTime().timeWithSeconds;
        };
        
        dateFactory.getTimeNoSec = function(){
            return constructDateAndTime().timeWithoutSeconds;
        };

        dateFactory.getDate = function(){
            return constructDateAndTime().date;
        };
        
        dateFactory.getWeekDay = function(){
            return constructDateAndTime().weekDay;
        };
        
        return dateFactory;

    });