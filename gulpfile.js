var gulp = require('gulp'),
    jade = require('gulp-jade'),
    less = require('gulp-less'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    cleancss = require('gulp-cleancss'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    watch = require('gulp-watch');

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

//Finds Bugs JsHint

gulp.task('lint', function () {
   gulp.src('src/js/**/*.js')
       .pipe(jshint())
       .pipe(jshint.reporter('default'));
});

//Concat Minify JsFiles

gulp.task('minjs', function () {
   gulp.src('src/js/**/*.js')
       .pipe(concat('main.js'))
       .pipe(uglify())
       .pipe(rename({suffix: '.min'}))
       .pipe(gulp.dest('builds/production/js'));
});

//Concat Minify CSS

gulp.task('mincss', function () {
    gulp.src('builds/development/css/*.css')
        .pipe(concat('styles.css'))
        .pipe(cleancss({keepBreaks: false}))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('builds/production/css'));
});

//Watch Task

gulp.task('watch', function () {
    gulp.watch(['src/js/*.js'],['minjs']);
    gulp.watch(['builds/development/css/*.css'],['mincss']);
});








