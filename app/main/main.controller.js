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
*/