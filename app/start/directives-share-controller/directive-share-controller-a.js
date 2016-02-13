angular
    .module('main.start')
    .directive('aaDirectiveShareControllerA', function(directiveShareGameFactory){
        return {
            restrict: 'E',
            scope: false,
            template: '<div class="col-md-6"><div>{{::ctrl.person.name}} {{ctrl.person.food}} {{::ctrl.person.drink}} {{directiveShareGameFactory.getGame()}}</div><div><input type="text" ng-model="ctrl.person.food"/><input type="text" ng-keyup="changeGame($event)"/></div></div>',
            replace: true,
            link: function(scope, $element, attributes, ctrl){
                console.log("aaDirectiveShareControllerA");
                console.log(ctrl.person.food);
                
                scope.directiveShareGameFactory = directiveShareGameFactory;
                
                angular.element('input[ng-keyup]').val(scope.directiveShareGameFactory.getGame());
                
                scope.changeGame = function (event) {
                  directiveShareGameFactory.setGame(event.currentTarget.value);  
                };
            },
            controller: 'directiveShared',
            controllerAs: 'ctrl',
            bindToController: true
        };
    });