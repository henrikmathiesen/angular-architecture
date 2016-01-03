angular
    .module('main')
    .controller('main', function(stateChangeFactory){
    
    var mainCtrl = this;
    
    mainCtrl.stateChangeFactory = stateChangeFactory;
    mainCtrl.title = "Angular Architecture";
});


/* 
    We use controller as syntax because
    - In views we can better see what controller a property belongs to
    - To remedy unpredecteble bindings to child/parent scopes
    - https://toddmotto.com/digging-into-angulars-controller-as-syntax/
    
    # 
    main as mainCtrl
    var mainCtrl = this;
    mainCtrl.title = "Foo";
    
    = 
    $scope.mainCtrl = this;
    $scope.mainCtrl.title = "Foo";
    
    ------------------------------
    'controller as' does not meen that we loose scope, it is just syntax sugar on top of it
    
*/