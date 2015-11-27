'use strict';

var gulp = require('gulp');
var streamify = require('gulp-streamify')
var uglify = require('gulp-uglify');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

gulp.task('js', function() {
    browserify('./api/components/client.js')  // entry point
        .transform(reactify)                // transform jsx
        .bundle()                           // commonJS to js
        .pipe(source('bundle.js'))          // compile to bundle.js
        .pipe(streamify(uglify()))          // minify
        .pipe(gulp.dest('./assets/js/'));   // path to save
});

gulp.task('default', ['js']);

gulp.task('watch', ['js'], function() {
    gulp.watch(['./api/components/**/*'], ['js']);
});

