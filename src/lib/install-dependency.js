'use strict';
var exec = require('child_process').exec;
var log = require('./log');
var error = require('./error');

module.exports = (dep, cb) => {
  var cmd = `bower install ${dep} --save-dev`;
  return exec(cmd, {cwd: process.cwd()}, function(err, stdout, stderr) {
    if (err) {
      error(err, 'install-dependency');
    }
    log(stdout, 'blue');
    log(stderr, 'blue');
    cb(dep);
  });
};
