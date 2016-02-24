angular
    .module('main.shareScope')
    .directive('controllerAsChildDir', function(){
        return {
            restrict:'E',
            template:[
                '<div>',
                    '<div>My snus is: {{ ctrl.snus }}</div>',
                    '<div>Parents computer is: {{ ctrl.computer }}</div>',
                    '<div>Grand parents phone is: {{ ctrl.phone }}</div>',
                '</div>'
            ].join(''),
            replace: true,
            scope: false,
            controller: function(){
                var ctrl = this;
                ctrl.snus = "Ettan";
            },
            controllerAs: 'ctrl',
            bindToController: true
        };
    });