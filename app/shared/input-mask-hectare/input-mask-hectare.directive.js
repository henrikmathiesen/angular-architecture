angular
    .module('main.shared')
    .directive('aaInputMaskHectare', function () {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: 'shared/input-mask-hectare/input-mask-hectare.template.html',
            link: function (scope) {
                scope.vm = {};
                
                scope.vm.foo = null;
            }
        };
    });
