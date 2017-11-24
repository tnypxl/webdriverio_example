var merge = require('deepmerge');
var defaultConf = require('./wdio.conf');

exports.config = merge(defaultConf.config, {
  specs: [
    './test/specs/**/*.js'
  ],
  exclude: [
    // 'path/to/excluded/files'
  ],
  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    compilers: ['js:babel-register'],
  }
});