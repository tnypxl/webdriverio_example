exports.config = {
  sync: true,
  logLevel: 'error',
  coloredLogs: true,
  seleniumLogs: './logs',
  deprecationWarnings: true,
  bail: 0,
  screenshotPath: './errorShots/',
  baseUrl: 'http://the-internet.herokuapp.com',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  maxInstances: 10,
  services: ['selenium-standalone'],
  capabilities: [{
    maxInstances: 5,
    browserName: 'chrome'
  }],

  before: before => {
    const chai = require('chai');
    global.expect = chai.expect;
    global.assert = chai.assert;
    global.should = chai.should();
  }
}


