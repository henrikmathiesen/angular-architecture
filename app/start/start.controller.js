angular
    .module('main.start')
    .controller('start', function ($state, $window) {

        var startCtrl = this;

        startCtrl.fadeOutCallback = function () {
            console.log("fadeOutCallback ran in start controller");
        };

        startCtrl.search = function () {
            console.log("<--- FAKE SEARCH --->");
        };

        startCtrl.goToNewWindow = function () {
            //$window.open($state.href('newwindow', { foo: 'test' }, { absolute: true } ), '_blank');
            //$state.go('newwindow', { foo: 'test' });

            //var url = $state.href('newwindow', {foo: "test"});
            //$window.open(url,'_blank');
            
            //
            // SENDING PARAMS, NOT PART OF THE URL, IS NOT SUPPORTED WHEN OPEN ROUTE IN NEW WINDOW
            // http://stackoverflow.com/questions/33232761/ui-router-open-state-in-new-tab-with-target-blank-params-are-lost
        };

    });