var gulp = require('gulp'),
    babelify = require('babelify'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream');

gulp.task('bundle', function () {
    return browserify({entries: './app/app.jsx', extensions: ['.jsx'], debug: true})
        .transform('babelify', {presets: ['es2015', 'react']})
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task("copy", ["bundle"], function () {
    return gulp.src(["./app/index.html"])
        .pipe(gulp.dest("dist"));
});

gulp.task("default",["copy"],function(){
   console.log("Gulp completed..."); 
});