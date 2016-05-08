'use strict';

var $ = require('require-dir')('./');
var afterInstall = require('./after-install');

module.exports = function (opts, cb) {
  $.options.set(opts);
  $.read('.ragin', function (err) {
    if (err) {
      $.log.started('clone');
      $.clone(function (err, succes) {
        if (err) {
          $.log.warning(err, 'clone');
        }
        if (succes) {
          $.log.finished('clone');
          $.log.started('install');
          $.install(function () {
            $.log.finished('install');
            afterInstall(function () {
              return cb();
            });
          });
        }
      });
    } else {
      afterInstall(function () {
        return cb();
      });
    }
  });
};