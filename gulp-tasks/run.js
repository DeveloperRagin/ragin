var gulp = require('gulp');
var raginUi = require('./../src/lib/ragin');

gulp.task('run', () => {
  return new raginUi();
});

gulp.task('run:tests', () => {
  return ragin({'baseDir': ['test']});
});
