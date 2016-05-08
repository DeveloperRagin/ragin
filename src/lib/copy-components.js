'use strict';
var gulp = require('gulp');
var checkPlugin = require('./check-plugin');
var checkDependencies = require('./check-dependencies');
var pluginTasks = require('./plugin-tasks');

var copyToDest = (plugin, cb) => {
  gulp.src([plugin.__path__])
    // .pipe(replace(dest, 'src'))
    .pipe(gulp.dest(`${GLOBAL.RAGIN.COMPONENTS_DEST}/${plugin.name}`));

  return cb();
};

var dependencyTasks = (plugin, cb) => {
  checkPlugin(plugin.name);
  checkDependencies({plugin: plugin}, _plugin => {
    pluginTasks(_plugin);
    copyToDest(plugin, () => {
      return cb();
    });
  });
};
module.exports = (path, plugins, override, cb) => {
  var _path = path;
  for (var i = 0; i < plugins.length; i++) {
    var plugin = {
      name: plugins[i],
      __path__: _path + '/' + plugins[i] + '/' + plugins[i] + '.html',
      __componentsPath__: _path
    };
    // temporary over rule check plugin
    if (override) {
      var pp = plugin.__path__.replace(plugins[i] + '.html', '*.{html,js}');
      plugin.__path__ = pp;
      copyToDest(plugin, () => {
        return cb();
      });
    } else {
      dependencyTasks(plugin, () => {
        return cb();
      });
    }
  }
};
