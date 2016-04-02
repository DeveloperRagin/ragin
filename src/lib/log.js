'use strict';
var chalk = require('chalk');

module.exports = (text, color) => {
  return console.log(chalk[color](text));
};
