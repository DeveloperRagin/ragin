'use strict';
var log = require('./../log');
var version = require('./../version');

module.exports = {
  version: function() {
    log(version.get(), 'green');
  },
  started: function(task) {
    log('starting ' + task, 'blue');
  },
  finished: function(task) {
    log('finished ' + task, 'green');
  },
  warning: function(text, task) {
    log(`task::${task}: ${text}`, 'yellow');
  }
};
