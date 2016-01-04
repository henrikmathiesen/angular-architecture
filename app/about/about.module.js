angular
    .module('main.about', ['main.shared'])
    .config(function () {
        console.log("About Config");
    })
    .run(function () {
        console.log("About Run");
    });