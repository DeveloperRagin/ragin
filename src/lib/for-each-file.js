'use strict';
var error = require('./error');

var exists = (_name, name, cb) => {
  if (name === _name) {
    return cb(true);
  } else {
    return cb(false);
  }
};

var get = (_name, name, file, cb) => {
  exists(_name, name, function(exists) {
    if (exists) {
      if (!file){
        return cb(name);
      }
      return cb(file);
    }
  });
};

var _runOptions_ = (name, file, opts, cb) => {
  if (opts.exists) {
    exists(opts.exists, name, cb);
  }
  if (opts.get) {
    get(opts.get, name, file, cb);
  }
};

module.exports = (files, opts, cb) => {
  if (files.length) {
    for (var i = 0; i < files.length; i++) {
      var name = '';
      if (files[i] && typeof files[i] === 'string') {
        name = files[i];
        files[i] = null;
      } else {
        name = files[i].name ? files[i].name : null;
      }
      if (opts) {
        _runOptions_(name, files[i], opts, cb);
      } else {
        if (files[i] === null) {
          files[i] = name;
        }
        return cb(files[i], i);
      }
    }
  } else {
    for (var file in files) {
      if (files.hasOwnProperty(file)) {
        if (opts) {
          _runOptions_(file, files[file], opts, cb);
        } else {
          return cb(files[file], file);
        }
      }
    }
  }
};
