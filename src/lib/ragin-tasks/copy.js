'use strict';
var copyComponents = require('./../copy-components');

module.exports = () => {
  // temporary copy 'ragin-app' & other elements from components folder
  copyComponents(GLOBAL.RAGIN.COMPONENTS_PATH, ['ragin-app', 'ragin-icons']);
  copyComponents(GLOBAL.RAGIN.COMPONENTS_PATH, ['paper-material', 'fetch-element', 'fetch'], true);
  copyComponents(GLOBAL.RAGIN.COMPONENTS_PATH, [
    'paper-item',
    'iron-icon',
    'paper-icon-button',
    'paper-styles',
    'iron-selector',
    'paper-toolbar',
    'iron-iconset-svg',
    'iron-meta',
    'font-roboto',
    'iron-behaviors',
    'iron-flex-layout',
    'paper-behaviors',
    'iron-a11y-keys-behavior',
    'paper-ripple'
  ], true);
  // copy copmonents for the used plugins, includes dependencies
  copyComponents(GLOBAL.RAGIN.COMPONENTS_PATH, GLOBAL.RAGIN.plugins);
};
