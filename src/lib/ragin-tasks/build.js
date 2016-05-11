'use strict';
var fs = require('fs');
var tags = require('./../inject-tags');
var github = require('./../github');

var _replace = (arr, index) => {
  return new Promise(function(resolve, reject) {
    if (!index) {
      reject();
    }
    var replacement;
    var calls = 0;
    arr.forEach(i => {
      calls += 1;
      replacement = `app.${i} = ${JSON.stringify(GLOBAL.RAGIN[i])}`;
      index = index.replace(tags[i], replacement);
      if (arr.length === calls) {
        return resolve(index);
      }
    });
  });
};

var defaultTasks = index => {
  return new Promise(function(resolve, reject) {
    if (!index) {
      reject();
    }
    // inject plugins & version
    _replace(['plugins', 'version'], index).then(index => {
      return resolve(index);
    });
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
      var replacement = `app.github = ${JSON.stringify(user)}`;
      index = index.replace(tags.github, replacement);
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
