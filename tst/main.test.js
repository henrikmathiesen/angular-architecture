describe("Application should load its modules", function(){
    
    it("finds and load main module, which is dependant on existing dependencies also loads", function(){
        module('main'); // This requires ng-mock (bower component, included in karma config file list)
    });
});