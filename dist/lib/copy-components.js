'use strict';

var gulp = require('gulp');
var fs = require('fs');
var checkPlugin = require('./check-plugin');
var checkDependencies = require('./check-dependencies');
var pluginTasks = require('./plugin-tasks');
var replace = require('gulp-replace');

module.exports = function (path, plugins, override) {
  var _path = path;
  for (var i = 0; i < plugins.length; i++) {
    var dest = '.ragin/bower_components/' + plugins[i] + '/';
    var plugin = {
      'name': plugins[i],
      '__path__': _path + '/' + plugins[i] + '/' + plugins[i] + '.html',
      '__componentsPath__': _path
    };
    // temporary over rule check plugin
    if (!override) {
      checkPlugin(plugins[i]);
      checkDependencies(plugins[i]);
      pluginTasks(plugin);
    } else {
      plugin.__path__ = plugin.__path__.replace(plugins[i] + '.html', '*.{html,js}');
    }
    gulp.src([plugin.__path__]).pipe(replace(dest, 'app')).pipe(gulp.dest(dest));
  }
};