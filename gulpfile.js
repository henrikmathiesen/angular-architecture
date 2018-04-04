/* global __dirname */

var gulp = require('gulp');

var concatJs = require('gulp-concat');
var ngAnnotate = require('gulp-ng-annotate');
var templateCache = require('gulp-angular-templatecache');
var stripDebug = require('gulp-strip-debug');
var uglifyJs = require('gulp-uglify');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

var less = require('gulp-less');
var autoprefix = require('gulp-autoprefixer');
var minifyCss = require('gulp-minify-css');

var sourceMaps = require('gulp-sourcemaps');
var del = require('del');
var gulpif = require('gulp-if');
var rev = require('gulp-rev');
var inject = require('gulp-inject');
var argv = require('yargs').argv;

var Server = require('karma').Server;

var isProduction = (argv.prod) ? (true) : (false);
var resetinject = (argv.resetinject) ? (true) : (false);

//
// Sources

var jsLibSrc = [
    'bower_components/jquery/dist/jquery.js',
    'bower_components/fastclick/lib/fastclick.js',
    'bower_components/angular/angular.js',
    'bower_components/angular-i18n/angular-locale_sv-se.js',
    'bower_components/angular-ui-router/release/angular-ui-router.js',
    'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
    //'lib/angular-input-masks-standalone.2.6.0.js'
    'bower_components/angular-input-masks/angular-input-masks-standalone.js'
];

var jsAppSrc = [
    'app/**/*.module.js',
    'app/**/*.js'
];

var templateSrc = 'app/**/*.template.html';

var lessSrc = 'app/main/less/main.less';
var lessSrcWatch = 'app/**/*.less';

var bldFolder = 'bld';

//
// Sub tasks

var injectToHtml = function () {
    var sourcesToInject = gulp.src([
        bldFolder + '/lib*.js',
        bldFolder + '/app*.js',
        bldFolder + '/templates*.js',
        bldFolder + '/main*.css'
    ], { read: false });

    return gulp
        .src('./index.html')
        .pipe(inject(sourcesToInject))
        .pipe(gulp.dest('./'));
};

gulp.task('clean-bld', function () {
    del.sync(bldFolder);
});

gulp.task('template-cache', function () {
    return gulp
        .src(templateSrc)
        .pipe(templateCache())
        .pipe(gulpif(isProduction, rev()))
        .pipe(gulp.dest(bldFolder));
});

gulp.task('js-lib', function () {
    return gulp
        .src(jsLibSrc)
        .pipe(gulpif(!isProduction, sourceMaps.init()))

        .pipe(concatJs('lib.js'))

        .pipe(gulpif(isProduction, uglifyJs()))
        .pipe(gulpif(isProduction, rev()))

        .pipe(gulpif(!isProduction, sourceMaps.write()))
        .pipe(gulp.dest(bldFolder));
});

gulp.task('js-app', function () {
    return gulp
        .src(jsAppSrc)

        .pipe(jshint())
        .pipe(jshint.reporter(stylish))
        .pipe(jshint.reporter('fail'))

        .pipe(gulpif(!isProduction, sourceMaps.init()))

        .pipe(concatJs('app.js'))
        .pipe(ngAnnotate())

        .pipe(gulpif(isProduction, stripDebug()))
        .pipe(gulpif(isProduction, uglifyJs()))
        .pipe(gulpif(isProduction, rev()))

        .pipe(gulpif(!isProduction, sourceMaps.write()))
        .pipe(gulp.dest(bldFolder));
});

gulp.task('less', function () {
    return gulp
        .src(lessSrc)
        .pipe(gulpif(!isProduction, sourceMaps.init()))

        .pipe(less())
        .pipe(autoprefix({ browsers: ['last 3 versions'] }))

        .pipe(gulpif(isProduction, minifyCss()))
        .pipe(gulpif(isProduction, rev()))

        .pipe(gulpif(!isProduction, sourceMaps.write()))
        .pipe(gulp.dest(bldFolder));
});

//
// Main tasks

gulp.task('default', ['clean-bld', 'js-lib', 'js-app', 'template-cache', 'less'], function () {
    // If we are in dev environment we do not revision js and css files, so do not need to modify html file on every build
    // If isProduction is false, after a isProduction build, we need to reset html file with non revisioned file references
    // Then we can keep running the small watch jobs that only keeps overwriting the non revisioned files
    if (!isProduction && !resetinject) { return; }
    injectToHtml();
});

gulp.task('test', ['default', 'template-cache'], function (done) {
    new Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true,
        verbose: true
    }, done).start();
});

gulp.task('watch', ['default'], function () {
    gulp.watch(jsAppSrc, ['js-app']);
    gulp.watch(lessSrcWatch, ['less']);
    gulp.watch(templateSrc, ['template-cache']);
});
