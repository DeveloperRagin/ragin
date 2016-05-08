'use strict';

var fs = require('fs');
var log = require('./ragin-tasks/log');
var installDep = require('./install-dependency');

module.exports = function (opts, cb) {
  if (!opts.plugin) {
    throw new Error(opts.plugin + ' not defined');
  }
  var name = opts.plugin.name || opts.plugin;
  if (!opts.dependencies) {
    opts.dependencies = 'devDependencies';
  }
  var bowerFile = fs.readFileSync('bower.json');
  var dependencies = JSON.parse(bowerFile)[opts.dependencies];
  if (dependencies[name]) {
    return cb(opts.plugin);
  }
  log.warning(name + ' not installed', 'check-dependencies');
  log.started('bower install --save-dev ' + name);
  installDep(name, function () {
    log.finished('bower install --save-dev ' + name);
    return cb(opts.plugin);
  });
};