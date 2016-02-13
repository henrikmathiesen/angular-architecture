angular
    .module('main.shared')
    .directive('aaDirectiveShareControllerA', function(){
        return {
            restrict: 'A',
            scope: {},
            link: function(scope, $element, attributes){
                console.log("aaDirectiveShareControllerA");
            },
            controller: 'directiveShared',
            controllerAs: 'ctrl',
            bindToController: true
        };
    });