'use strict';

var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    reactify = require('reactify'),
    rename = require('gulp-rename'),
    less = require('gulp-less'),
    path = require('path'),
    uglify = require('gulp-uglify'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer-core')


    ;

function swallowError(error) {

    //If you want details of the error in the console
    console.log(error.toString());

    this.emit('end');
}

var options = {
    less: './app/css/**/*.less',
    js: './app/js/main.jsx',
    phonegap_js: './app/js/phonegap_init.js',
    html: './app/*.html',
    dest: './dest/',
    phonegap_dest: './phonegap/www/'
}

gulp.task('html', function () {
    gulp.src(options.html)
        .pipe(gulp.dest(options.dest))
});

gulp.task('css', function () {
    var processors = [
        autoprefixer({browsers: ['last 1 version']}),
    ];

    gulp.src(options.less)
        .on('error', swallowError)
        .pipe(less({
            paths: [
                path.join(__dirname, 'less', 'includes'),
                './node_modules'
            ]
        }))
        .pipe(postcss(processors))
        .pipe(gulp.dest(options.dest + 'css/'));
});

gulp.task('browserify', function () {
    gulp.src(options.js)
        .on('error', swallowError)
        .pipe(browserify({
                transform: ['reactify'],
                debug: true,
                extensions: ['.jsx']
            }
        ))
        .pipe(rename('bundle.js'))
        .pipe(gulp.dest(options.dest + 'js/'));
});

gulp.task('default', ['css', 'browserify', 'html'], function () {
    console.log(options)
});

gulp.task('mobile', function () {
    options.js = options.phonegap_js;
    options.dest = options.phonegap_dest;
});

gulp.task('production', ['default'], function () {
    gulp.src("./dest/bundle.js")
        .pipe(uglify())
        .pipe(rename('bundle.min.js'))
        .pipe(gulp.dest('./dest/'))

});


gulp.task('watch', ['default'], function () {
    gulp.watch('./app/**', ['default'])
});


// TODO collect
// https://gist.github.com/mamchenkov/3690981
// find ./app -iname '*.js' -o -iname '*.jsx' | xargs xgettext --language=javascript --from-code=utf-8 --keyword=_gt:1
