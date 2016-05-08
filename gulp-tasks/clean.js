'use strict';
var gulp = require('gulp');
var del = require('del');

gulp.task('clean', cb => {
  del(GLOBAL.config.dest)
  .then(() => {
    cb();
  });
});
