'use strict';
var fs = require('fs');
var raginTodo = require('./plugin-tasks/ragin-todo');
var getDependencies = require('./get-dependencies');

module.exports = plugin => {
  var path = plugin.__path__.replace(plugin.name + '.html', 'bower.json');
  var bowerFile = fs.readFileSync(path);
  switch (plugin.name) {
    case 'ragin-todo':
      raginTodo();
      break;
    default:
  }
  var dependencies = JSON.parse(bowerFile).dependencies;
  getDependencies(plugin.__componentsPath__ + '/', dependencies);
};
