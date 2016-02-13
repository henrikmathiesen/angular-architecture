angular
    .module('main.shared')
    .directive('aaDirectiveShareControllerB', function(){
        return {
            restrict: 'A',
            scope: {},
            link: function(scope, $element, attributes){
                console.log("aaDirectiveShareControllerB");
            },
            controller: 'directiveShared',
            controllerAs: 'ctrl',
            bindToController: true
        };
    });