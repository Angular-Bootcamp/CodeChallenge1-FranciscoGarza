var gulp = require('gulp'),
    jade = require('gulp-jade'),
    less = require('gulp-less'),
    jshint = require('gulp-jshint');

//Compile Jade

gulp.task('jade', function () {
    return gulp.src('src/templates/**/*.jade')
        .pipe(jade())
        .pipe(gulp.dest('builds/development'));
});

//Compile Less

gulp.task('less', function () {
   return  gulp.src('src/less/*.less')
       .pipe(less())
       .pipe(gulp.dest('builds/development/css'));
});

//Debbuging JsHint

gulp.task('lint', function () {
   gulp.src('src/js/**/*.js')
       .pipe(jshint())
       .pipe(jshint.reporter('default'));
});

