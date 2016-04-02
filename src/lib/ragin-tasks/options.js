'use strict';
var config = require('./../config');
var version = require('./../version');

var defaultPlugins = () => {
  return ['ragin-todo'];
};

var set = function(opts) {
  opts = opts || {};
  GLOBAL.RAGIN = GLOBAL.RAGIN || {};
  GLOBAL.RAGIN.MODULES_PATH = opts.modulesPath ? opts.modulesPath : config.modulesPath;
  GLOBAL.RAGIN.DEST = opts.dest ? opts.dest : config.dest;
  GLOBAL.RAGIN.COMPONENTS_PATH = opts.componentsPath ? opts.componentsPath : config.componentsPath;
  GLOBAL.RAGIN.COMPONENTS_DEST = opts.componentsDest ? opts.componentsDest : config.componentsDest;
  GLOBAL.RAGIN.version = version.get();
  GLOBAL.RAGIN.port = opts.port ? opts.port : 9000;
  GLOBAL.RAGIN.plugins = opts.plugins ? opts.plugins : defaultPlugins();
  GLOBAL.RAGIN.ui = {
    'port' : opts.port ? opts.port + 1 : 9001
  };
  GLOBAL.RAGIN.server = opts.server ? opts.server : '.ragin';
  return GLOBAL.RAGIN;
};

var get = function(opt) {
  if (opt) {
    return GLOBAL.RAGIN[opt];
  }
  return GLOBAL.RAGIN;
};

module.exports = {
  set: set,
  get: get
};
