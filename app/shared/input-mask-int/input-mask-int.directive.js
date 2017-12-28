// Prio 1
// https://www.npmjs.com/package/angular-input-masks
// Requires: https://docs.angularjs.org/guide/i18n

// Prio 2
// https://github.com/angular-ui/ui-mask

angular
    .module('main.shared')
    .directive('aaInputMaskInt', function () {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: 'shared/input-mask-int/input-mask-int.template.html',
            link: function (scope, $element) {
                scope.vm = {};

                scope.vm.ammount = null;

                // Testing rendering with locale
                scope.vm.currency = 10000;
            }
        };
    });

