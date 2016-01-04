describe("about module should work", function(){
    
    var errorMessagesConstant;
    
    beforeEach(function(){
        module('main.about');
        
        inject(function(_errorMessagesConstant_){
            errorMessagesConstant = _errorMessagesConstant_;
        });
    });
    
    it("finds a dependency for this module and run its constant", function(){
        expect(errorMessagesConstant).toBeDefined();
    });
    
});