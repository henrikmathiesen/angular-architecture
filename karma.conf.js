module.exports = function (config) {

    config.set({
        //basePath: process.cwd(),        // might be needed for loading directive templates
        browsers: ['PhantomJS'],
        frameworks: ['jasmine'],
        files: [
            'bld/lib.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'bld/app.js',
            'bld/templates.js',
            'tst/**/*.js'
        ]
    });

};
