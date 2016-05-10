'use strict';
var fs = require('fs');

module.exports = class Version {
  constructor() {
    return new Version();
  }

  static get() {
    if (GLOBAL.RAGIN && GLOBAL.RAGIN.MODULES_PATH) {
      var path;
      if (GLOBAL.config.env === 'dev') {
        path = 'bower.json';
      } else {
        path = `${GLOBAL.RAGIN.MODULES_PATH}/ragin/bower.json`;
      }
      return JSON.parse(fs.readFileSync(path)).version;
    }
  }

  static set(version, input) {
    if (!version) {
      version = this.get();
    }
    if (typeof input === 'object') {
      input = JSON.stringify(input);
    }
    return input.replace(/version="(.*)"/g, version);
  }
};
