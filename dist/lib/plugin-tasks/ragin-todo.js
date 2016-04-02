'use strict';

var gulp = require('gulp');
var todo = require('gulp-todo-file');
var append = require('gulp-append');

module.exports = function () {
  return gulp.src(['app/**/**.html', '!app/bower_components/**']).pipe(todo()).pipe(append('.ragin/todo.json'));
};