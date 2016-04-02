var gulp = require('gulp');

gulp.task('dev', () => {
  GLOBAL.config.env = 'dev';
  GLOBAL.config.dest = '.tmp/';
  return;
});
