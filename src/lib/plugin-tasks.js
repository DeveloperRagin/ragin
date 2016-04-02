'use strict';
var fs = require('fs');
var raginTodo = require('./plugin-tasks/ragin-todo');
var getDependencies = require('./get-dependencies');

module.exports = (plugin) => {
  var bowerFile = fs.readFileSync(plugin.__path__.replace(plugin.name + '.html', 'bower.json'));
  switch (plugin.name) {
    case 'ragin-todo':
      raginTodo();
      break;
    default:
  }
  getDependencies(plugin.__componentsPath__ + '/', JSON.parse(bowerFile).dependencies);
};
