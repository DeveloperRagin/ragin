var gulp = require('gulp');
var Ragin = require('./../src/lib/ragin');

gulp.task('run', () => {
  return new Ragin({componentsPath: 'bower_components'});
});

gulp.task('run:tests', () => {
  return new Ragin({baseDir: ['test']});
});
