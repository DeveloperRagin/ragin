'use strict';
var log = require('./log');
var $ = require('require-dir')('./ragin-tasks');

module.exports = {
  log: $.log,
  init: $.init,
  options: $.options,
  dir: {
    read: $.read
  },
  git: {
    clone: $.clone
  },
  copy: $.copy,
  start: $.start
};
