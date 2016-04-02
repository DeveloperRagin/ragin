'use strict';

var bs = require('browser-sync').create();

module.exports = function (opts) {
  bs.init({
    port: opts.port,
    ui: {
      port: opts.ui.port
    },
    server: opts.server
  });
};