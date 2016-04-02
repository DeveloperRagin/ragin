'use strict';
var chalk = require('chalk');

module.exports = (text, task) => {
  throw new Error(chalk.red(text) + '\n module ' +
    chalk.blue('developer-ragin-ui') + '\n task ' +
    chalk.cyan(task));
};
