'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var raginTasks = require('./ragin-tasks');

module.exports = function Ragin(opts) {
  _classCallCheck(this, Ragin);

  var ragin = this || {};
  ragin.init = raginTasks.init(opts, function () {
    ragin.start = raginTasks.start(GLOBAL.RAGIN);
    return ragin;
  });
};