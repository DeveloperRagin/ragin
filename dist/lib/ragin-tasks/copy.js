'use strict';

var copyComponents = require('./../copy-components');

var defaultBundle = ['ragin-app', 'ragin-ui-drawer', 'ragin-ui-content', 'ragin-icons', 'paper-material', 'paper-item', 'iron-icon', 'paper-icon-button', 'paper-styles', 'iron-selector', 'paper-toolbar', 'iron-iconset-svg', 'iron-meta', 'font-roboto', 'iron-behaviors', 'iron-flex-layout', 'paper-behaviors', 'iron-a11y-keys-behavior', 'iron-media-query', 'paper-ripple', 'fetch-element', 'fetch'];

var runCopyComponents = function runCopyComponents(bundles, cb) {
  var runs = 0;
  return bundles.forEach(function (bundle, i) {
    var override = false;
    runs += 1;
    if (i === 0) {
      override = true;
    }
    copyComponents(GLOBAL.RAGIN.COMPONENTS_PATH, bundle, override, function () {
      cb(runs);
    });
  });
};

module.exports = function (cb) {
  var bundles = [defaultBundle, GLOBAL.RAGIN.plugins];
  // temporary copy 'ragin-app', 'ragin-plugins' & other elements from components folder
  runCopyComponents(bundles, function (length) {
    if (length === bundles.length) {
      return cb();
    }
  });
};