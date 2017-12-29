angular
    .module('main', [
        'ui.router',
        'ui.bootstrap',
        'ui.utils.masks',
        'ui.mask',
        'templates',
         
        'main.shared', 
        
        'main.start', 
        'main.about', 
        'main.shareScope',
        'main.shareScopeMore',
        'main.responsivejs', 
        'main.events', 
        'main.event', 
        'main.papa',
        'main.papaabstract', 
        'main.error',
        'main.newWindow'
        
        ]);
    
angular
    .module('main').run(function ($state, stateChangeFactory) {
        console.log("Main Run");
        console.log($state.get());

        stateChangeFactory.handleStateEvents();
});
    
    

    
/*
    # Order of execution for config and run
    - start modules config
    - about modules config
    - main modules config
    - start modules run
    - about modules run
    - main modules run
    
    # 3party modules must come before App modules
    # Order of App module dependencies does not seem to matter
    
    # Two modules that needs the same services will both reference a dependant to the service module
    - That makes unit testing one individual module easier, since it then loads its dependencies on its own
    - This is ok: "Each module can only be loaded once, even if multiple other modules require it."
        https://docs.angularjs.org/guide/module
    
    # Can NOT inject service into config
    # CAN inject service into run
    
    # CAN inject constants into both config and run
    
    # ui.router is more powerful than ng-route; "use it instead"
    
    https://scotch.io/tutorials/3-simple-tips-for-using-ui-router
    
    # If using resolve in state object, the controller WILL NOT be instantiated if a promise is rejected
        - Also the view will not load until resolved
        
    
    Cool loader animation, easy to use (he says): https://github.com/chieffancypants/angular-loading-bar
    
 */
