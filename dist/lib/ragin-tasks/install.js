'use strict';

var installDependencies = require('./../install-dependencies');
var fs = require('fs');
var log = require('./log');

module.exports = function (cb) {
  var path = GLOBAL.RAGIN.DEST + '/bower.json';
  var bowerFile = JSON.parse(fs.readFileSync(path));
  var msg = 'installing ' + bowerFile.name + ' dependencies';
  log.started(msg);
  installDependencies(bowerFile.dependencies, function (dep) {
    dep = dep.split('/');
    path = GLOBAL.RAGIN.COMPONENTS_PATH + '/' + dep[1] + '/bower.json';
    log.finished(msg);
    bowerFile = JSON.parse(fs.readFileSync(path));
    installDependencies(bowerFile.dependencies, function () {
      return cb();
    });
  });
};