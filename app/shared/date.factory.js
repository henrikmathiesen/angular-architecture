angular
    .module('main.shared')
    .factory('dateFactory', function () {

        var _date = new Date();

        var _year = _date.getFullYear();
        var _month = _date.getMonth() + 1;
        var _day = _date.getDate();

        var _hours = _date.getHours();
        var _minutes = _date.getMinutes();
        var _seconds = _date.getSeconds();

        var _currentDate = {
            timeWithSeconds: ((_hours < 10) ? ("0") : ("")) + _hours + ":" + ((_minutes < 10) ? ("0") : ("")) + _minutes + ":" + ((_seconds < 10) ? ("0") : ("")) + _seconds,
            timeWithoutSeconds: ((_hours < 10) ? ("0") : ("")) + _hours + ":" + ((_minutes < 10) ? ("0") : ("")) + _minutes,
            date: _year + "-" + ((_month < 10) ? ("0") : ("")) + _month + "-" + ((_day < 10) ? ("0") : ("")) + _day
        };
        
        return {
            currentTime: _currentDate.timeWithSeconds,
            currentTimeNoSec: _currentDate.timeWithoutSeconds,
            currentDate: _currentDate.date
        }

    });