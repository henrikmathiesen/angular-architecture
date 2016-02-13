angular
    .module('main.shared')
    .directive('aaDirectiveShareControllerC', function(){
        return {
            restrict: 'A',
            scope: {},
            link: function(scope, $element, attributes, ctrl){
                console.log("aaDirectiveShareControllerC");
            },
            controller: 'directiveShared',
            controllerAs: 'ctrl',
            bindToController: true
        };
    });