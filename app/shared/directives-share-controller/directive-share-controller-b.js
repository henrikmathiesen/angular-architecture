angular
    .module('main.shared')
    .directive('aaDirectiveShareControllerB', function(){
        return {
            restrict: 'A',
            scope: {},
            transclude: true,
            template: '{{:: ctrl.person.name}} {{ctrl.person.food}} {{ctrl.person.drink}} <ng-transclude></ng-transclude>',
            link: function(scope, $element, attributes, ctrl){
                console.log("aaDirectiveShareControllerB");
            },
            controller: 'directiveShared',
            controllerAs: 'ctrl',
            bindToController: true
        };
    });