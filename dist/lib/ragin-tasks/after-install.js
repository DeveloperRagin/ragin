'use strict';

var log = require('./log');
var build = require('./build');
var copy = require('./copy');
/**
 * Performs tasks after install is finished
 * @param {callback} cb returns when all tasks are finished
 * @return {callback} cb
 */
module.exports = function (cb) {
  // run the build task
  log.started('build');
  build();
  log.finished('build');
  // run the 'copy' task
  log.started('copy');
  copy(function () {
    log.finished('copy');
    // current version
    log.version();
    return cb();
  });
};