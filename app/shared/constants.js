angular
    .module('main.shared')
    .constant('apiUrlConstant', 'http://localhost:1338/')
    .constant('weekDaysConstant', {
        sunday: 'Sunday',
        monday: 'Monday',
        tuesday: 'Tuesday',
        wednesday: 'Wednesday',
        thursday: 'Thursday',
        friday: 'Friday',
        saturday: 'Saturday'
    });