angular
    .module('main.about')
    .controller('about', function (dateFactory, weekDaysConstant) {

        console.log("About controller");

        var aboutCtrl = this;

        aboutCtrl.currentDayMessage = '';
        aboutCtrl.currentDay = dateFactory.getWeekDay();

        switch (aboutCtrl.currentDay) {
            case weekDaysConstant.sunday:
                aboutCtrl.currentDayMessage = 'Yeah relaxing!';
                break;
            case weekDaysConstant.saturday:
                aboutCtrl.currentDayMessage = 'Yeah relaxing and stay up late!';
                break;
            default:
                aboutCtrl.currentDayMessage = 'Work work work!';
                break;
        }

    });