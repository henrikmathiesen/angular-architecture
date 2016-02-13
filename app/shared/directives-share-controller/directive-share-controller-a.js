angular
    .module('main.shared')
    .directive('aaDirectiveShareControllerA', function(){
        return {
            restrict: 'E',
            scope: false,
            template: '<div class="col-md-6"><div>{{::ctrl.person.name}} {{ctrl.person.food}} {{::ctrl.person.drink}}</div><div><input type="text" ng-model="ctrl.person.food"/></div></div>',
            replace: true,
            link: function(scope, $element, attributes, ctrl){
                console.log("aaDirectiveShareControllerA");
                console.log(ctrl.person.food);
            },
            controller: 'directiveShared',
            controllerAs: 'ctrl',
            bindToController: true
        };
    });