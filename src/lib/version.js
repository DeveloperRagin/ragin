'use strict';
var fs = require('fs');

var runOptions = (version, opts) => {
  // get: function() {
  //
  // }
};

module.exports = {
  get: function() {
    if (GLOBAL.RAGIN && GLOBAL.RAGIN.MODULES_PATH) {
      return JSON.parse(fs.readFileSync(GLOBAL.RAGIN.MODULES_PATH + '/ragin/bower.json')).version;
    }
  },
  set: function(version, input) {
    if (typeof input === 'object') {
      input = JSON.stringify(input);
    }
    return input.replace(/version="(.*)"/g, version);
  }
};
