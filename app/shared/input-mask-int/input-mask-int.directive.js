angular
    .module('main.shared')
    .directive('aaInputMaskInt', function () {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: 'shared/input-mask-int/input-mask-int.template.html',
            link: function (scope, $element) {

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

