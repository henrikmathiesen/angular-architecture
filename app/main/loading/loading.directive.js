angular
    .module('main')
    .directive('aaLoading', function () {
        return {
            scope: {},
            templateUrl: '/app/main/loading/loading.template.html',
            replace: true,
            controller: function (stateChangeFactory) {
                var ctrl = this;
                ctrl.stateChangeFactory = stateChangeFactory;
            },
            controllerAs: 'ctrl',
            bindToController: true
        };
    });