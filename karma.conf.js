module.exports = function (config) {

    config.set({
        //basePath: process.cwd(),        // might be needed for loading directive templates
        browsers: ['PhantomJS'],
        frameworks: ['jasmine'],
        files: [
            'bower_components/angular/angular.js',
            'bower_components/angular-ui-router/release/angular-ui-router.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'app/**/*.module.js',
            'app/**/*.js',
            'bld/templates.js',
            'tst/**/*.js'
        ]
    });

};