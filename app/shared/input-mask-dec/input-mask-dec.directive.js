angular
    .module('main.shared')
    .directive('aaInputMaskDec', function ($timeout) {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: 'shared/input-mask-dec/input-mask-dec.template.html',
            link: function (scope, $element) {
                scope.vm = {};

                scope.vm.ammount = null;

                // Testing server response, works
                // $timeout(function () { 
                //     scope.vm.ammount = -10000.59;
                // }, 4000);
            }
        };
    });
