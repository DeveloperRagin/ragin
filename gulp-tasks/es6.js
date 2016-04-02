'use strict';
var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var crisper = require('gulp-crisper');
var babel = require('gulp-babel');
var _if = require('gulp-if');
var del = require('del');

gulp.task('ES6:transpile', () => {
  return gulp.src([
    'index.js',
    'src/**/*.{html,js}',
    '!src/bower_components/**/*'
   ])
   .pipe(_if(GLOBAL.config.env === 'dev', sourcemaps.init()))
   .pipe(_if('*.html', crisper({scriptInHead: false}))) // Extract JS from .html files
   .pipe(_if('*.js', babel({
     presets: ['es2015']
   })))
   .pipe(_if(GLOBAL.config.env === 'dev', sourcemaps.write('.')))
   .pipe(gulp.dest(GLOBAL.config.dest));
});

// gulp.task('ES6:clean', () => {
//   return del('dist/*.js.map', {dot: true});
// });

// Transpile all JS to ES6.
gulp.task('ES6', ['ES6:transpile']);
