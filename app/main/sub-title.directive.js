angular
    .module('main')
    .directive('aaSubTitle', function(){
       return {
           scope: {},
           template: '<h2>{{ctrl.state.current.data.title}}</h2>',
           replace: true,
           controller: function ($state){
               var ctrl = this;
               ctrl.state = $state; 
           },
           controllerAs: 'ctrl',
           bindToController: true
       };
    });