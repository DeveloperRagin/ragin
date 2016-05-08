'use strict';

var fs = require('fs');
var ensureFile = require('./ensure-file');
var forEachFile = require('./for-each-file');

module.exports = {
  get: function get() {
    ensureFile('ragin.json').then(function (file) {
      return fs.readFileSync('ragin.json');
    });
  },

  set: function set(plugins) {
    var plugs = [];

    forEachFile(plugins, null, function (file, key) {
      plugs.push(file);
    });
    plugins = { 'plugins': plugs };
    fs.writeFileSync('ragin.json', JSON.stringify(plugins));
  }
};