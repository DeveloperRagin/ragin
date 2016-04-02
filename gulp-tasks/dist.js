var gulp = require('gulp');

gulp.task('dist', () => {
  GLOBAL.config.env = 'dist';
  GLOBAL.config.dest = 'dist/';
  return;
});
