'use strict';
var installDep = require('./install-dependency');

var installEach = (deps, cb) => {
  deps.forEach((dep, i) => {
    installDep(dep, _dep => {
      if (deps.length === i + 1) {
        return cb(_dep);
      }
    });
  });
};

module.exports = (dependencies, cb) => {
  var deps = [];
  for (var dep in dependencies) {
    if (dependencies.hasOwnProperty(dep)) {
      if (dependencies[dep].includes(dep)) {
        deps.push(dependencies[dep]);
      } else {
        deps.push(dep);
      }
    }
  }
  installEach(deps, _dep => {
    console.log('returns cb');
    return cb(_dep);
  });
};
