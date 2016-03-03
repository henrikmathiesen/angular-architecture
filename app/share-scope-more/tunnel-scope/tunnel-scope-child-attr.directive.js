angular
    .module('main.shareScopeMore')
    .directive('aaTunnelScopeChildAttr', function ($timeout) {
        return {
            restrict: 'A',
            scope: false,
            link: function (scope, element, attrs) {
                
                var rymdskepp = {
                    skepp: { name: 'Super Falcon!' },
                    editSkepp: { foo: 'no way' }
                };

                element.on('click', function () {
                    $timeout(function(){
                        scope.rymdskepp = rymdskepp;
                    }, 0);
                });
            }
        };
    });