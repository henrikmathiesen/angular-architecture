describe("Application should load its modules", function () {

    it("finds and load main module, which is dependant on existing dependencies also loads", function () {
        // This requires ng-mock (bower component, included in karma config file list)
        // Short hand for 'angular.mock.module' respective 'angular.mock.inject', https://docs.angularjs.org/api/ngMock/function/angular.mock.module
        // 'module' = load our modules, or create one with an inline function
        // 'inject' = get instances of components from modules, like factories
        // use injected '$controller' to get hold of a controller, see bellow, or create a new one with inline function
        // _injected_ is a convention to avoid naming conflicts
        // 'dump' = dump logging, console.log(angular.mock.dump(someObject)); karma also has a dump function; dump(angular.mock.dump(someObject));
        module('main');
    });

});

describe("main module", function () {

    var ctrl;

    beforeEach(function () {
        module('main');

        inject(function (_$controller_) {
            ctrl = _$controller_('main');
        });
    });

    it("should have a main controller", function () {
        expect(ctrl).toBeTruthy();
    });

    it("should have a main controller with a title property", function () {
        expect(ctrl.title).toBeTruthy();
    });

});

describe("main navigation directive provides the navigation to the user", function(){
    
    var $filter;
    var $state;
    var $compile;
    var $rootScope;
    var $scope;
    
    beforeEach(function(){
        module('main');
        
        inject(function(_$filter_, _$state_, _$compile_, _$rootScope_){
            $filter = _$filter_;
            $state = _$state_;
            $compile = _$compile_;
            $rootScope = _$rootScope_;
            $scope = _$rootScope_.$new();
        });
    });
    
    it("should generate an ul with n number of li's, where n = number of ui.router states gone through a custom filter", function(){
        var element = '<aa-main-navigation></aa-main-navigation>';
        var html = $compile(element)($scope);
        //$rootScope.$digest();
        //dump(angular.mock.dump(angular.element(html).html()));
    });
    
});