angular
    .module('main.shared')
    .directive('aaInputMaskInt', function () {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: 'shared/input-mask-int/input-mask-int.template.html',
            link: function (scope, $element) {
                console.log('aaInputMaskInt');
            }
        };
    });

