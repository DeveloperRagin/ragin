'use strict';
var chalk = require('chalk');

module.exports = (text, task) => {
  throw new Error(chalk.red(text) + '\n module ' +
    chalk.blue('ragin') + '\n task ' +
    chalk.cyan(task));
};
