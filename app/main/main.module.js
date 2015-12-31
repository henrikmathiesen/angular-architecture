angular
    .module('main', ['ui.router', 'main.shared', 'main.start', 'main.about', 'main.responsivejs', 'main.events', 'main.event', 'main.error'])
    .config(function ($urlRouterProvider, $stateProvider) {
        console.log("Main Config");

        // $urlRouterProvider comes from 'ui.router' (with ng-route we specify otherwise in $routeProvider)
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('start', {
                url: '/',
                templateUrl: '/app/start/start.template.html',
                controller: 'start as startCtrl',
                data: {
                    title: 'Start',
                    showInMenu: true
                }
            })
            .state('about', {
                url: '/about',
                templateUrl: '/app/about/about.template.html',
                controller: 'about as aboutCtrl',
                data: {
                    title: 'About',
                    showInMenu: true
                }
            })
            .state('responsivejs', {
                url: '/responsivejs',
                templateUrl: '/app/responsivejs/responsivejs.template.html',
                controller: 'responsivejs as responsivejsCtrl',
                data: {
                    title: 'Responsive JS',
                    showInMenu: true
                }
            })
            .state('events', {
                url: '/events',
                templateUrl: '/app/events/events.template.html',
                controller: 'events as eventsCtrl',
                data: {
                    title: 'The Events Yeah!',
                    showInMenu: true
                },
                resolve: {
                    eventsData: function (eventsFactory) {
                        return eventsFactory.getEvents();
                    }
                }
            })
            .state('events.event', {
                url: '/event/:id',
                templateUrl: '/app/event/event.template.html',
                controller: 'event as eventCtrl',
                data: {
                    showInMenu: false
                },
                resolve: {
                    eventData: function (eventsData, $stateParams) {
                        return eventsData[(parseInt($stateParams.id))];
                    }
                },
                onEnter: function (eventData, $state) {
                    if (!eventData) {
                        $state.go('events');
                    }
                }
            })
            .state('error', {
                templateUrl: '/app/error/error.template.html',
                controller: 'error as errorCtrl',
                data: {
                    title: 'An error is upon us!!',
                    showInMenu: false
                },
                params: {
                    // Since this state does not have an url, we cant send parameter that way. This way works instead
                    // This object can also be used to set default values to url parameters
                    errorInfo: null
                }
            })
            .state("s404", {
                url: "/*path",
                data: {
                    showInMenu: false
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
        
    
    Cool loader animation, easy to use (he says): https://github.com/chieffancypants/angular-loading-bar
    
 */