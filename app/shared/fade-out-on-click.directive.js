angular
    .module('main.shared')
    .directive('aaFadeOutOnClick', function(){
        return {
            restrict: 'A',
            scope: {
                callback: '&'
            },
            link: function(scope, $element){
                $element.on('click', function(){
                    $element.fadeOut({
                        done: scope.callback
                    });
                });
            }
        };
    });