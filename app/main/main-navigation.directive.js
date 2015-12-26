angular
    .module('main')
    .directive('aaMainNavigation', function () {
        return {
            scope: {},
            templateUrl: '/app/main/main-navigation.template.html',
            controller: function ($rootScope) {
                var ctrl = this;

                $rootScope.$on('$stateChangeSuccess',
                    function (event, toState, toParams, fromState, fromParams) {
                        ctrl.state = toState.name;
                    });

            },
            controllerAs: 'ctrl'
        }
    });
    
    
// http://blog.thoughtram.io/angularjs/2015/01/02/exploring-angular-1.3-bindToController.html