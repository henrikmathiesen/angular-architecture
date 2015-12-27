angular
    .module('main.shared')
    .factory('dateFactory', function (weekDaysConstant) {

        var _constructDateAndTime = function () {
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
        
        var getTime = function(){
            return _constructDateAndTime().timeWithSeconds;
        };
        
        var getTimeNoSec = function(){
            return _constructDateAndTime().timeWithoutSeconds;
        };

        var getDate = function(){
            return _constructDateAndTime().date;
        };
        
        var getWeekDay = function(){
            return _constructDateAndTime().weekDay;
        };
        
        return {
            getTime: getTime,
            getTimeNosec: getTimeNoSec,
            getDate: getDate,
            getWeekDay: getWeekDay
        }

    });