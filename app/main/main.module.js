angular
    .module('main', ['ui.router', 'main.shared', 'main.start', 'main.about'])
    .config(function($urlRouterProvider, $stateProvider, statesConstant){
       console.log("Main Config");
       
       $urlRouterProvider.otherwise('/');
       
       $stateProvider
        .state(statesConstant.start, {
            url: '/',
            templateUrl: '/app/start/start.template.html',
            controller: 'start',
            controllerAs: 'startCtrl'
        })
        .state(statesConstant.about, {
            url: '/about',
            templateUrl: '/app/about/about.template.html',
            controller: 'about',
            controllerAs: 'aboutCtrl'
        })

    })
    .run(function($state){
        console.log("Main Run");
        console.log($state.get());
    });
    
    

    
/*
    # Order of execution for config and run
    - start modules config
    - about modules config
    - main modules config
    - start modules run
    - about modules run
    - main modules run
    
    # Can NOT inject service into config
    # CAN inject service into run
    
    # CAN inject constants into both config and run
    
    # ui.router is more powerful than ng-route; "use it instead"
    
 */