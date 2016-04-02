'use strict';

var fs = require('fs');

module.exports = function (path, cb) {
  fs.readdir(path, function (err, files) {
    return cb(err, files);
  });
};