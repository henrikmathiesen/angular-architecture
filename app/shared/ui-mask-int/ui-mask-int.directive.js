angular
    .module('main.shared')
    .directive('aaUiMaskInt', function () {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: 'shared/ui-mask-int/ui-mask-int.template.html',
            link: function (scope, $element) {
                scope.vm = {};
                scope.vm.ammount = null;
            }
        };
    });
