angular
    .module('main.about')
    .controller('about', function ($scope, dateFactory, weekDaysConstant) {

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
        
        
        //
        // Filter ng-options
        
        aboutCtrl.games = [
            {
                id: '1',
                name: 'Witcher 1'
            },
            {
                id: '2',
                name: 'Witcher 2'
            },
            {
                id: '3',
                name: 'Witcher 3'
            },
            {
                id: '4',
                name: 'Dragon Age 1'
            },
            {
                id: '5',
                name: 'Dragon Age 2'
            },
            {
                id: '6',
                name: 'Dragon Age 3'
            },
            {
                id: '7',
                name: 'Mass Effect 1'
            },
            {
                id: '8',
                name: 'Mass Effect 2'
            },
            {
                id: '9',
                name: 'Pong'
            },
            {
                id: '10',
                name: 'Tetris'
            }
        ];
        
        aboutCtrl.gameSelected = '';
        aboutCtrl.gamesFilter = '';
        aboutCtrl.gamesFiltered = [];
        
        aboutCtrl.checkGameSelected = function () {
            console.log(aboutCtrl.gameSelected);
            console.log(aboutCtrl.gamesFiltered);  
        };
        
        //
        // UI DatePicker
        // If trouble, try: 'event.preventDefault()' and 'event.stopPropagation()'in open and toggle 
        
        aboutCtrl.uiDatePickerOne = {};
        aboutCtrl.uiDatePickerOne.vm = new Date();
        aboutCtrl.uiDatePickerOne.isOpen = false;
        
        aboutCtrl.uiDatePickerOne.open = function (event) {
            aboutCtrl.uiDatePickerOne.isOpen = true;  
        };
        
        aboutCtrl.uiDatePickerOne.toggle = function (event) {
            aboutCtrl.uiDatePickerOne.isOpen = !aboutCtrl.uiDatePickerOne.isOpen;
        };
        
        aboutCtrl.uiDatePickerOne.changeEvent = function (event) {
            console.log("UI DATE PICKER CHANGE");
            console.log(aboutCtrl.uiDatePickerOne.vm);
            console.log("/UI DATE PICKER CHANGE");
        };
        

    });