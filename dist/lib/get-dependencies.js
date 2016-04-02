'use strict';

var gulp = require('gulp');
var forEachFile = require('./for-each-file');
var config = require('./config');

module.exports = function (path, deps) {
  var fileNames;
  for (var dep in deps) {
    if (deps.hasOwnProperty(dep) && dep !== 'polymer') {
      fileNames = fileNames ? fileNames + ',' + dep : dep;
    }
  }
  if (fileNames) {
    if (fileNames.includes(',')) {
      path = path + '/{polymer,webcomponentsjs,' + fileNames + '}/**/*.{html,js}';
    } else {
      path = path + '/' + fileNames + '/**/*.html';
    }
    gulp.src(path).pipe(gulp.dest(GLOBAL.RAGIN.COMPONENTS_DEST));
  }
  // body...
};