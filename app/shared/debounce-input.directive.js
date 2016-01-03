angular
    .module('main.shared')
    .directive('aaDebounceInput', function($timeout){
        return {
            restrict: 'A',
            scope: {
                callback: '&',
                delay: '='
            },
            link: function(scope, $element){
                var timeout;
                
                $element.on('keyup', function(){
                    $timeout.cancel(timeout);
                    timeout = $timeout(scope.callback, scope.delay);
                });
                
                $element.on('keydown', function(){
                    $timeout.cancel(timeout);
                });
            }
        };
    });