'use strict';

var raginTasks = require('./../ragin-tasks');
var $ = require('require-dir')('./');

module.exports = function (opts) {
  $.options.set(opts);
  $.read('.ragin', function (err, files) {
    if (err) {
      $.log.started('clone');
      return $.clone(function (err, succes) {
        if (succes) {
          $.log.finished('clone');
          $.log.started('build');
          $.build();
          $.log.finished('build');
          $.log.started('copy');
          $.copy();
          $.log.finished('copy');
        }
      }.bind(this));
    } else {
      $.log.started('build');
      $.build();
      $.log.finished('build');
      $.log.started('copy');
      $.copy();
      $.log.finished('copy');
      $.log.version();
    }
  });
};