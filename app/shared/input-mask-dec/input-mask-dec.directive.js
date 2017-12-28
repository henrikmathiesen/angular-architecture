angular
    .module('main.shared')
    .directive('aaInputMaskDec', function () {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: 'shared/input-mask-dec/input-mask-dec.template.html',
            link: function (scope, $element) {
                console.log('aaInputMaskDec');
            }
        };
    });
