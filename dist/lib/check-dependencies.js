'use strict';

var fs = require('fs');

module.exports = function (plugin) {
  var dependencies = JSON.parse(fs.readFileSync('bower.json')).dependencies;
  if (!dependencies[plugin]) {
    throw new Error(plugin + ': not installed, run bower install ' + plugin + ' --save', 'check-dependencies');
  }
};