'use strict';
var errorhan = require('./error');
// check plugins for compatibility
module.exports = (plugin) => {
  if (!plugin.includes('-')) {
    errorhan(plugin + ' doesn\'t seem to be a valid polymer-element', 'check-plugin');
  } else if (!plugin.includes('ragin')) {
    errorhan(plugin + ' doesn\'t seem to be a valid ragin plugin', 'check-plugin');
  }
};
