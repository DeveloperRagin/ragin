'use strict';

var fs = require('fs');

module.exports = function (file) {
  return new Promise(function (resolve, reject) {

    fs.access(file, fs.R_OK, function (err) {
      if (err) {
        console.warn('no access!');
        reject(file);
      }
      resolve(file);
    });
  });
};