module.exports = function (config) {

    config.set({
        browsers: ['PhantomJS'],
        frameworks: ['jasmine'],
        files: [
            'bower_components/angular/angular.js',
            'bower_components/angular-ui-router/release/angular-ui-router.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'app/**/*.module.js',
            'app/**/*.js',
            'tst/**/*.js'
        ]
    });

};