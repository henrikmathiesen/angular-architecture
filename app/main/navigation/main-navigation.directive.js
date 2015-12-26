angular
    .module('main')
    .directive('aaMainNavigation', function () {
        return {
            scope: {},
            templateUrl: '/app/main/navigation/main-navigation.template.html',
            replace: true,
            controller: function ($state) {
                var ctrl = this;
                
                // Remove the first abstract state from the array
                ctrl.states = $state.get();
                ctrl.states.shift();
            },
            controllerAs: 'ctrl',
            bindToController: true
        }
    });
    
    
// http://blog.thoughtram.io/angularjs/2015/01/02/exploring-angular-1.3-bindToController.html