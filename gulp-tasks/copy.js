'use strict';
var gulp = require('gulp');

gulp.task('copy', () => {
  gulp.src(['bower_components/{polymer,webcomponents,ragin-app}/*.{js,html}'])
  .pipe(gulp.dest(GLOBAL.config.dest));
});
