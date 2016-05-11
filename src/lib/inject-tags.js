'use strict';
// Use a regex for injecting default is set to @attribute, example: @version
// you could also do something like this: /version="(.*)"/g
module.exports = {
  version: /\/\/ @version/g,
  deployed: /\/\/ @deployed/g,
  plugins: /\/\/ @ragin-plugins/g,
  github: /\/\/ @github/g
};
