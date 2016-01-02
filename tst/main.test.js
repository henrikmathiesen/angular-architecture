describe("Application should load its modules", function () {

    it("finds and load main module, which is dependant on existing dependencies also loads", function () {
        // This requires ng-mock (bower component, included in karma config file list)
        // Short hand for angular.mock.module, https://docs.angularjs.org/api/ngMock/function/angular.mock.module
        module('main');
    });

});

describe("main module", function () {

    var ctrl;

    beforeEach(function () {
        module('main');

        inject(function ($controller) {
            ctrl = $controller('main');
        });
    });

    it("should have a main controller", function () {
        expect(ctrl).toBeTruthy();
    });

    it("should have a main controller with a title property", function () {
        expect(ctrl.title).toBeTruthy();
    });

});