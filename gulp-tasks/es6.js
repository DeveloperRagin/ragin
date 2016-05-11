'use strict';
var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var crisper = require('gulp-crisper');
var babel = require('gulp-babel');
var _if = require('gulp-if');
var del = require('del');

gulp.task('ES6:transpile', () => {
  return gulp.src(['src/**/*.{html,js}'])
   .pipe(_if(GLOBAL.config.env === 'dev', sourcemaps.init()))
   .pipe(_if('*.html', crisper({scriptInHead: false}))) // Extract JS from .html files
   .pipe(_if('*.js', babel({
     presets: ['es2015']
   })))
   .pipe(_if(GLOBAL.config.env === 'dev', sourcemaps.write('.')))
   .pipe(gulp.dest(GLOBAL.config.dest));
});

// Transpile all JS to ES6.
gulp.task('ES6', gulp.series('ES6:transpile'));
