var gulp = require('gulp');

var concatJs = require('gulp-concat');
var ngAnnotate = require('gulp-ng-annotate');
var stripDebug = require('gulp-strip-debug');
var uglifyJs = require('gulp-uglify');

var less = require('gulp-less');
var autoprefix = require('gulp-autoprefixer');
var minifyCss = require('gulp-minify-css');

var sourceMaps = require('gulp-sourcemaps');
var del = require('del');
var gulpif = require('gulp-if');
var rev = require('gulp-rev');
var inject = require('gulp-inject');
var yargs = require('yargs').argv;


var jsAppSrc = [
    './app/**/*.module.js',
    './app/**/*.js'
];

var jsLibSrc = [
    './bower_components/jquery/dist/jquery.js',
    './bower_components/angular/angular.js',
    './bower_components/angular-ui-router/angular-ui-router.js'
];