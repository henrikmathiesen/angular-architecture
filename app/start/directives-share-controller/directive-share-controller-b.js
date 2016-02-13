angular
    .module('main.start')
    .directive('aaDirectiveShareControllerB', function(){
        return {
            restrict: 'E',
            scope: false,
            template: '<div class="col-md-6"><div>{{::ctrl.person.name}} {{ctrl.person.food}} {{::ctrl.person.drink}}</div><aa-directive-share-controller-c/></div>',
            replace: true,
            link: function(scope, $element, attributes, ctrl){
                console.log("aaDirectiveShareControllerB");
                console.log(ctrl.person.food);
            },
            controller: 'directiveShared',
            controllerAs: 'ctrl',
            bindToController: true
        };
    });