// Prio 1
// https://github.com/angular-ui/ui-mask

// Prio 2
// https://www.npmjs.com/package/angular-input-masks
// Requires: https://docs.angularjs.org/guide/i18n

angular
    .module('main.shared')
    .directive('aaInputMaskInt', function () {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: 'shared/input-mask-int/input-mask-int.template.html',
            link: function (scope, $element) {
                scope.vm = {};

                // Testing rendering with locale
                scope.vm.currency = 10000;

                // Simulating Server Response
                $element.find('.form-control').on('blur', function () { 
                    var value = angular.element(this).val();
                    var cleaned = value.split(' ').join('');
                    var number = parseInt(cleaned);
                    
                    angular.element(this).val(number);
                });
            }
        };
    });

