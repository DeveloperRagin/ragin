'use strict';
var $ = require('require-dir')('./');
var afterInstall = require('./after-install');

module.exports = (opts, cb) => {
  $.options.set(opts);
  $.read('.ragin', function(err) {
    if (err) {
      $.log.started('clone');
      $.clone(function(err, succes) {
        if (err) {
          $.log.warning(err, 'clone');
        }
        if (succes) {
          $.log.finished('clone');
          $.log.started('install');
          $.install(() => {
            $.log.finished('install');
            afterInstall(() => {
              return cb();
            });
          });
        }
      });
    } else {
      afterInstall(() => {
        return cb();
      });
    }
  });
};
