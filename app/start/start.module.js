angular
    .module('main.start', [])
    .config(function(){
        console.log("Start Config");
    })
    .run(function(){
        console.log("Start Run");
    });