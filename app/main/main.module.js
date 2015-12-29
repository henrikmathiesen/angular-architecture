angular
    .module('main', ['ui.router', 'main.shared', 'main.start', 'main.about', 'main.responsivejs', 'main.events'])
    .config(function ($urlRouterProvider, $stateProvider) {
        console.log("Main Config");

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('start', {
                url: '/',
                templateUrl: '/app/start/start.template.html',
                controller: 'start as startCtrl',
                data: {
                    title: 'Start'
                }
            })
            .state('about', {
                url: '/about',
                templateUrl: '/app/about/about.template.html',
                controller: 'about as aboutCtrl',
                data: {
                    title: 'About'
                }
            })
            .state('responsivejs', {
                url: '/responsivejs',
                templateUrl: '/app/responsivejs/responsivejs.template.html',
                controller: 'responsivejs as responsivejsCtrl',
                data: {
                    title: 'Responsive JS'
                }
            })
            .state('events', {
                url: '/events',
                templateUrl: '/app/events/events.template.html',
                controller: 'events as eventsCtrl',
                data: {
                    title: 'The Events Yeah!'
                },
                resolve: {
                    eventData: function (eventsFactory) {
                        return eventsFactory.getEvents();
                    }
                }
            });
    })
    .run(function ($state, stateChangeFactory) {
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
    
    # Order of module dependencies does not seem to matter
    
    # Can NOT inject service into config
    # CAN inject service into run
    
    # CAN inject constants into both config and run
    
    # ui.router is more powerful than ng-route; "use it instead"
    
    https://scotch.io/tutorials/3-simple-tips-for-using-ui-router
    
    # If using resolve in state object, the controller WILL NOT be instantiated if a promise is rejected
        - Also the view will not load until resolved
    
 */