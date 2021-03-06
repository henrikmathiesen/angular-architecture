angular
    .module('main.shareScope')
    .directive('aaDirectiveShareControllerC', function(directiveShareGameFactory){
        return {
            restrict: 'E',
            scope: false,
            template: '<div>{{::ctrl.person.name}} {{ctrl.person.food}} {{::ctrl.person.drink}} {{directiveShareParentCtrl.person.food}} {{directiveShareGameFactory.getGame()}}</div>',
            replace: true,
            link: function(scope, $element, attributes, ctrl){
                console.log("aaDirectiveShareControllerC");
                console.log(ctrl.person.food);
                
                scope.directiveShareGameFactory = directiveShareGameFactory;
            },
            controller: 'directiveShared',
            controllerAs: 'ctrl',
            bindToController: true
        };
    });