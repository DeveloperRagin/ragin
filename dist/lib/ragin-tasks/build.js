'use strict';

var gulp = require('gulp');
var fs = require('fs');

// build on the fly
module.exports = function () {
  var path = GLOBAL.RAGIN.DEST + 'index.html';
  var app = fs.readFileSync(path, 'utf8');
  fs.writeFileSync(path, app.replace(/app.plugins = \[(.*)\]/g, 'app.plugins = ["' + GLOBAL.RAGIN.plugins + '"]'));
};