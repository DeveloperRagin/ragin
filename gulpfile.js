'use strict';
// require gulp & gulp-tasks
var gulp = require('gulp');
require('require-dir')('gulp-tasks');

GLOBAL.config = GLOBAL.config || {};

// build distribution
gulp.task('default', gulp.series('dist', 'clean', 'ES6'));

// build distribution files
gulp.task('build', gulp.series('dev', 'ES6', 'copy'));

// start ragin
gulp.task('serve', gulp.series('build', 'run'));

// run tests
gulp.task('test', gulp.series('run:tests'));
