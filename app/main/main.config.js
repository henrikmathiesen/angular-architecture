angular
    .module('main')
    .config(function ($urlRouterProvider, $stateProvider) {
        console.log("Main Config");

        // $urlRouterProvider comes from 'ui.router' (with ng-route we specify otherwise in $routeProvider)
        $urlRouterProvider.otherwise('/');
        
        // templateUrl points to keys set by gulp job for templateCaching, the job creates a run block on module 'templates'

        $stateProvider
            .state('start', {
                url: '/',
                templateUrl: 'start/start.template.html',
                controller: 'start as startCtrl',
                data: {
                    title: 'Start',
                    showInMenu: true
                }
            })
            .state('about', {
                url: '/about',
                templateUrl: 'about/about.template.html',
                controller: 'about as aboutCtrl',
                data: {
                    title: 'About',
                    showInMenu: true
                }
            })
            .state('shareScope', {
                url: '/share-scope',
                templateUrl: 'share-scope/share-scope.template.html',
                controller: 'shareScope as shareScopeCtrl',
                data: {
                    title: 'Share Scope',
                    showInMenu: true
                }
            })
            .state('shareScopeMore', {
                url: '/share-scope-more',
                templateUrl: 'share-scope-more/share-scope-more.template.html',
                controller: 'shareScopeMore as shareScopeMoreCtrl',
                data: {
                    title: 'Share Scope More',
                    showInMenu: false
                }
            })
            .state('responsivejs', {
                url: '/responsivejs',
                templateUrl: 'responsivejs/responsivejs.template.html',
                controller: 'responsivejs as responsivejsCtrl',
                data: {
                    title: 'Responsive JS',
                    showInMenu: true
                }
            })
            .state('events', {
                url: '/events',
                templateUrl: 'events/events.template.html',
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
                templateUrl: 'event/event.template.html',
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
            .state('papa', {
                url: '/papa',
                data: {
                    title: 'The Papa',
                    showInMenu: true
                },
                views: {
                    '': {
                        templateUrl: 'papa/papa.template.html',
                        controller: 'papa as papaCtrl',
                    },
                    'childA@papa': {
                        template: '<p>Look Iam a child. {{papaCtrl.foo}}</p>'           // We can grab thins from parent ctrl
                    },
                    'childB@papa': {
                        template: '<p>Iam also a child</p>'
                    },
                    'about@papa': {
                        templateUrl: 'about/about.template.html',                  // This template also uses foo, only visible when child to papa
                        controller: 'about as aboutCtrl',
                    }
                }
            })
            .state('papa.childsA', {
                template: '<p>Iam childSA, the url has changed. {{papaCtrl.foo}}</p>',  // We can grab thins from parent ctrl
                url: '/childsa',
                data: {
                    showInMenu: false
                }
            })
            .state('papa.childsB', {
                template: '<p>Iam childSB, the url has not changed</p>',
                data: {
                    showInMenu: false
                }
            })
            .state('papaabstract', {
                // An abstract state can not be activated, activated implicitly when a child state is activated
                // URL is optional, if specfied then it will be appendet to all child states
                // Child states can also have their own controllers
                abstract: true,
                //url: '/papaabstract',
                template: '<ui-view></ui-view>',
                controller: 'papaabstract as papaabstractCtrl',
                data: {
                    showInMenu: false
                }
            })
            .state('papaabstract.abstractchilda', {
                url: '/abstractchilda',
                templateUrl: 'papaabstract/papaabstract-abstractchilda.template.html',
                data: {
                    title: 'Abstract child A',
                    showInMenu: true
                }
            })
            .state('papaabstract.abstractchildb', {
                url: '/abstractchildb',
                templateUrl: 'papaabstract/papaabstract-abstractchildb.template.html',
                data: {
                    title: 'Abstract child B',
                    showInMenu: true
                }
            })
            .state('error', {
                templateUrl: 'error/error.template.html',
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
    });