'use strict';
var log = require('./../log');
var version = require('./../version');

module.exports = {
  version: function() {
    log(version.get(), 'green');
  },
  started: function(task) {
    log('started ' + task, 'blue');
  },
  finished: function(task) {
    log('finished ' + task, 'green');
  }
};
