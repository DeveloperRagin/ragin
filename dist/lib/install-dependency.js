'use strict';

var exec = require('child_process').exec;
var util = require('gulp-util');

module.exports = function (dep, cb) {
  var cmd = 'bower install ' + dep + ' --save-dev';
  return exec(cmd, { cwd: process.cwd() }, function (err, stdout, stderr) {
    if (err) {
      console.log(err);
    }
    util.log(stdout, stderr);
    // process.exit(stderr);
    cb(dep);
  });
};