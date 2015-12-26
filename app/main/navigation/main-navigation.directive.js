angular
    .module('main')
    .directive('aaMainNavigation', function () {
        return {
            scope: {},
            templateUrl: '/app/main/navigation/main-navigation.template.html',
            controller: function ($rootScope, statesConstant) {
                var ctrl = this;
                
                ctrl.states = statesConstant;
                
//                 ctrl.state = '';
// 
//                 $rootScope.$on('$stateChangeSuccess',
//                     function (event, toState, toParams, fromState, fromParams) {
//                         ctrl.state = toState.name;
//                     });

            },
            controllerAs: 'ctrl',
            bindToController: true
        }
    });
    
    
// http://blog.thoughtram.io/angularjs/2015/01/02/exploring-angular-1.3-bindToController.html