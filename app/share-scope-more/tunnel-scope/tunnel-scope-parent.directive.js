angular
    .module('main.shareScopeMore')
    .directive('aaTunnelScopeParent', function() {
        return {
            restrict: 'E',
            scope: {
                rymdskepp: '='
            },
            template: [
                '<div>',
                    '<div>Parent directive binding: {{rymdskepp.skepp.name}}</div>',
                    '<aa-tunnel-scope-child wait-for="{{rymdskepp.skepp.name}}" rymdskepp="rymdskepp"></aa-tunnel-scope-child>',
                '</div>'
            ].join(''),
            link: function(scope, element, attrs){
                
            }
        };
    });