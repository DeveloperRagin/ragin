'use strict';

var git = require('gulp-git');
var error = require('./../error');

module.exports = function (cb) {
  // Clone remote repo to .ragin folder ($CWD/.ragin)
  git.clone('https://github.com/developerragin/ragin-ui', { args: '.ragin' }, function (err) {
    if (err) {
      error(err, 'clone-app');
    }
    cb(err, true);
  });
};