var gulp = require('gulp');

gulp.task('dist', cb => {
  GLOBAL.config.env = 'dist';
  GLOBAL.config.dest = 'dist/';
  return cb();
});
