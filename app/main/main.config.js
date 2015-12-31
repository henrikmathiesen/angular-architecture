angular
    .module('main')
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
            .state('papa', {
                url: '/papa',
                data: {
                    title: 'The Papa',
                    showInMenu: true
                },
                views: {
                    '': {
                        templateUrl: '/app/papa/papa.template.html',
                        controller: 'papa as papaCtrl',
                    },
                    'childA@papa': {
                        template: '<p>Look Iam child</p>'
                    },
                    'childB@papa': {
                        template: '<p>Iam also a child</p>'
                    },
                    'about@papa': {
                        templateUrl: '/app/about/about.template.html',
                        controller: 'about as aboutCtrl',
                    }
                }
            })
            .state('papa.childsA', {
                template: '<p>Iam childSA, the url has changed</p>',
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
    });