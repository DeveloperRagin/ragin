'use strict';
var fs = require('fs');

module.exports = (path, cb) => {
  fs.readdir(path, function(err, files) {
    return cb(err, files);
  });
};
