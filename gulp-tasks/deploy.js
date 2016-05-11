'use strict';
var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var _if = require('gulp-if');

// Deploy to GitHub pages
gulp.task('deploy:demo', function() {
  return gulp.src('.ragin/**/*')
    // Check if running task from Travis CI, if so run using GH_TOKEN
    // otherwise run using ghPages defaults.
    .pipe(_if(process.env.TRAVIS === 'true', ghPages({
      remoteUrl: 'https://$GH_TOKEN@github.com/DeveloperRagin/ragin.git',
      silent: true,
      branch: 'gh-pages'
    }), ghPages({
      branch: 'gh-pages'
    })));
});

gulp.task('deploy', function() {
  return gulp.src(['dist/**/*', 'index.js', 'package.json', 'bower.json'])
  // Check if running task from Travis CI, if so run using GH_TOKEN
  // otherwise run using ghPages defaults.
  .pipe(_if(process.env.TRAVIS === 'true', ghPages({
    remoteUrl: 'https://$GH_TOKEN@github.com/DeveloperRagin/ragin.git',
    silent: true,
    branch: GLOBAL.RAGIN.version
  }), ghPages({
    branch: GLOBAL.RAGIN.version
  })));
});
