var merge = require('deepmerge');
var defaultConf = require('./wdio.conf');

exports.config = merge(defaultConf.config, {
  specs: [
    './test/features/**/*.feature'
  ],
  exclude: [
    // './test/specs/**/*.js'
  ],
  framework: 'cucumber',
  cucumberOpts: {
    require: [
      './test/features/step_definitions/forgotPassword.steps.js'
    ],
    compiler: ['js:babel-register']
  }
});
