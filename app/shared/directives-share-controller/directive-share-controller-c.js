angular
    .module('main.shared')
    .directive('aaDirectiveShareControllerC', function(){
        return {
            restrict: 'E',
            scope: false,
            template: '<div>{{::ctrl.person.name}} {{ctrl.person.food}} {{::ctrl.person.drink}}</div>',
            replace: true,
            link: function(scope, $element, attributes, ctrl){
                console.log("aaDirectiveShareControllerC");
                console.log(ctrl.person.food);
            },
            controller: 'directiveShared',
            controllerAs: 'ctrl',
            bindToController: true
        };
    });