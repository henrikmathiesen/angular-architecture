angular
    .module('main.shareScopeMore')
    .directive('aaTunnelScopeChild', function($timeout) {
        return {
            restrict: 'E',
            scope: {
                rymdskepp: '='
            },
            template: [
                '<div>',
                    '<div data-aa-tunnel-scope-child-click="">Child directive binding: {{rymdskepp.skepp.name}}</div>',
                    '<div aa-tunnel-scope-child-attr="">Iam an attribute directive</div>',
                '</div>'
            ].join(''),
            link: function(scope, element, attrs){
                
                // console.log(scope);
                // console.log(scope.$parent);
                
                
                //scope = scope.$parent;
                
                // IT WORKS, model gets updated all the way up
                //
                // var rymdskepp = {
                //     skepp: { name: 'Super Falcon!' },
                //     editSkepp: { foo: 'no way' }
                // };
                // 
                // element.find('[data-aa-tunnel-scope-child-click]')
                //         .on('click', function(){ 
                //             console.log("click");
                //             
                //             $timeout(function(){
                //                 scope.rymdskepp = rymdskepp;    
                //             }, 0);
                //             
                //         });
                
                
                // With ng-if, it does not
                
                // So instead of ng-if, we try to solve it like this
                
                // scope.$watch(attrs.waitFor, function(newValue, oldValue){
                //     if(newValue != oldValue) {
                //         // Ajax done
                //         console.log("run logic against scope.rymdskepp");
                //     }
                // });
                
                attrs.$observe('waitFor', function(a, b){
                    // Ajax done
                    console.log("run logic against scope.rymdskepp");
                });
                        
            }
        };
    });