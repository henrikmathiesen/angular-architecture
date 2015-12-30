angular
    .module('main')
    .directive('aaMainNavigation', function () {
        return {
            scope: {},
            templateUrl: '/app/main/navigation/main-navigation.template.html',
            replace: true,
            controller: function ($state, $filter) {
                var ctrl = this;
                
                // Filter states for view
                ctrl.states = $filter('statesForMainNavigationFilter')($state.get());
                
            },
            controllerAs: 'ctrl',
            bindToController: true
        };
    });
    
    
// http://blog.thoughtram.io/angularjs/2015/01/02/exploring-angular-1.3-bindToController.html