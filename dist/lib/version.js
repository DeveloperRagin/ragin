'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var fs = require('fs');

var runOptions = function runOptions(version, opts) {
  // get: function() {
  //
  // }
};

module.exports = {
  get: function get() {
    if (GLOBAL.RAGIN && GLOBAL.RAGIN.MODULES_PATH) {
      return JSON.parse(fs.readFileSync(GLOBAL.RAGIN.MODULES_PATH + '/ragin/bower.json')).version;
    }
  },
  set: function set(version, input) {
    if ((typeof input === 'undefined' ? 'undefined' : _typeof(input)) === 'object') {
      input = JSON.stringify(input);
    }
    return input.replace(/version="(.*)"/g, version);
  }
};