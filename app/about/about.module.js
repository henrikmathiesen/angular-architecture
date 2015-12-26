angular
    .module('main.about', [])
    .config(function () {
        console.log("About Config");
    })
    .run(function () {
        console.log("About Run");
    });