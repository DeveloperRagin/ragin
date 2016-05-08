var gulp = require('gulp');

gulp.task('dev', cb => {
  GLOBAL.config.env = 'dev';
  GLOBAL.config.dest = '.tmp/';
  return cb();
});
