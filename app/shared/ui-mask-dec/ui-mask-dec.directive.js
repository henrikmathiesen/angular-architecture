angular
    .module('main.shared')
    .directive('aaUiMaskDec', function () {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: 'shared/ui-mask-dec/ui-mask-dec.template.html',
            link: function (scope, $element) {
                scope.vm = {};
                scope.vm.ammount = null;
            }
        };
    });
