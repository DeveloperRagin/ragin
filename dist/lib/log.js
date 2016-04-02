'use strict';

var chalk = require('chalk');

module.exports = function (text, color) {
  return console.log(chalk[color](text));
};