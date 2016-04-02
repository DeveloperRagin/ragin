'use strict';
// require gulp & gulp-tasks
var gulp = require('gulp');
require('require-dir')('gulp-tasks');

GLOBAL.config = GLOBAL.config || {};

// build distribution
gulp.task('default', ['dist', 'clean', 'ES6']);

// serve development file & start raginUi
gulp.task('serve', ['dev', 'ES6', 'run', 'copy']);

// run tests
gulp.task('test', ['run:tests']);
