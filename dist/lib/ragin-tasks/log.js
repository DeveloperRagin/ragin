'use strict';

var log = require('./../log');
var _version = require('./../version');

module.exports = {
  version: function version() {
    log(_version.get(), 'green');
  },
  started: function started(task) {
    log('starting ' + task, 'blue');
  },
  finished: function finished(task) {
    log('finished ' + task, 'green');
  },
  warning: function warning(text, task) {
    log('task::' + task + ': ' + text, 'yellow');
  }
};