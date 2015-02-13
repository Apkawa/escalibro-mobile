'use strict';

var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    reactify = require('reactify'),
    rename = require('gulp-rename'),
    less = require('gulp-less'),
    path = require('path'),
    uglify = require('gulp-uglify'),
    jscrush = require('gulp-jscrush')
    ;

function swallowError(error) {

    //If you want details of the error in the console
    console.log(error.toString());

    this.emit('end');
}

gulp.task('less', function () {
    gulp.src('./app/css/**/*.less')
        .on('error', swallowError)
        .pipe(less({
            paths: [
                path.join(__dirname, 'less', 'includes'),
                './node_modules'
            ]
        }))
        .pipe(gulp.dest('./dest/css'));
});

gulp.task('browserify', function() {
    gulp.src('./app/js/main.jsx')
        .on('error', swallowError)
        .pipe(browserify({
                transform: ['reactify'],
                debug: true,
                extensions: ['.jsx']
            }
        ))
        .pipe(rename('bundle.js'))
        .pipe(gulp.dest('./dest/'));
});

gulp.task('default', ['less', 'browserify'], function () {

});

gulp.task('production', ['default'], function (){
    gulp.src("./dest/bundle.js")
        .pipe(uglify())
        .pipe(rename('bundle.min.js'))
        .pipe(gulp.dest('./dest/'))


});


gulp.task('watch', ['default'], function () {
    gulp.watch('./app/js/**', ['default'])
    gulp.watch('./app/css/**', ['default'])
});
