'use strict';
var fs = require('fs');
var tags = require('./../inject-tags');
var github = require('./../github');

var defaultTasks = index => {
  return new Promise(function(resolve, reject) {
    if (!index) {
      reject();
    }
    // inject plugins
    index = index.replace(tags.plugins, JSON.stringify(GLOBAL.RAGIN.plugins));
    // inject version
    index = index.replace(tags.version, JSON.stringify(GLOBAL.RAGIN.version));
    return resolve(index);
  });
};

// inject github user info
// todo replace by ragin-plugin

var githubUser = index => {
  return new Promise(function(resolve, reject) {
    if (!index) {
      reject();
    }
    github.user.then(user => {
      index = index.replace(/@github/g, JSON.stringify(user));
      resolve(index);
    });
  });
};

// build on the fly
module.exports = () => {
  return new Promise(function(resolve, reject) {
    var path = GLOBAL.RAGIN.DEST + '/index.html';
    var index = fs.readFileSync(path, 'utf8');
    try {
      defaultTasks(index).then(index => {
        githubUser(index).then(index => {
          // write the modified file
          fs.writeFileSync(path, index);
          return resolve();
        });
      });
    } catch (e) {
      return reject(e);
    }
  });
};
