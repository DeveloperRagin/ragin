'use strict';
var bs = require('browser-sync').create();
var raginConfig = require('./ragin-config');
var raginTasks = require('./ragin-tasks');

module.exports = class Ragin {
  constructor(opts) {
    var ragin = this || {};
    ragin.init = raginTasks.init(opts);
    ragin.start = raginTasks.start(GLOBAL.RAGIN);
    return ragin;
  }
};
