// Prio 1 (works ok ...)
// https://www.npmjs.com/package/angular-input-masks
// Requires: https://docs.angularjs.org/guide/i18n

// Prio 2 (not good for currency: https://github.com/angular-ui/ui-mask/issues/92)
// https://github.com/angular-ui/ui-mask

// Prio 3 (not good for currency: https://github.com/candreoliveira/ngMask/issues/68)
// https://github.com/candreoliveira/ngMask

// Prio 4 (works, but only formats on blur)
// https://github.com/aguirrel/ng-currency

// Prio 5 (jQuery)
// https://github.com/RobinHerbots/Inputmask

angular
    .module('main.shared')
    .directive('aaInputMaskInt', function ($timeout) {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: 'shared/input-mask-int/input-mask-int.template.html',
            link: function (scope, $element) {
                scope.vm = {};

                scope.vm.ammount = null;

                // Testing rendering with locale
                scope.vm.currency = 10000;

                // Testing server response, works
                $timeout(function () { 
                    scope.vm.ammount = 10000;
                }, 4000);
            }
        };
    });

