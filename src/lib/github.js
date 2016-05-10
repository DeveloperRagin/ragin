'use strict';
var exec = require('child_process').exec;

module.exports = class Github {
  constructor() {
    this.user = this.user();
    return new Github();
  }

  static get user() {
    return new Promise(function(resolve, reject) {
      exec('git config --list', (err, stdout, stderr) => {
        if (err || stderr) {
          reject(err || stderr);
        }
        var name = stdout.match(/user.name=(.*)/g)[0];
        var email = stdout.match(/user.email=(.*)/g)[0];
        name = name.replace(/user.name=/g, '');
        email = email.replace(/user.email=/g, '');

        resolve({
          name: name,
          email: email
        });
      });
    });
  }
};
