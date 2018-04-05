angular
    .module('main.shared')
    .directive('aaInputMaskHectare', function ($timeout) {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: 'shared/input-mask-hectare/input-mask-hectare.template.html',
            link: function (scope) {
                scope.vm = {};
                
                scope.vm.foo = null;

                // Testing server response, works
                $timeout(function () { 
                    scope.vm.foo = 500;
                }, 4000);
            }
        };
    });
