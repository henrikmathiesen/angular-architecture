angular
    .module('main')
    .directive('aaLoading', function () {
        return {
            scope: {},
            templateUrl: 'main/loading/loading.template.html',
            replace: true,
            controller: function (stateChangeFactory) {
                var ctrl = this;
                ctrl.stateChangeFactory = stateChangeFactory;
            },
            controllerAs: 'ctrl',
            bindToController: true
        };
    });