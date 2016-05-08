'use strict';

var gulp = require('gulp');
var todo = require('gulp-todo-file');
var append = require('gulp-append');

module.exports = function () {
  var dest = GLOBAL.RAGIN.COMPONENTS_PATH.split('/');
  return gulp.src([dest[0] + '/**/**.html', '!' + dest[0] + '/bower_components/**']).pipe(todo()).pipe(append('.ragin/todo.json'));
};