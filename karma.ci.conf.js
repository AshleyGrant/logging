// Karma configuration
// Generated on Fri Dec 05 2014 16:49:29 GMT-0500 (EST)

module.exports = function(config) {
  // Use ENV vars on Travis and sauce.json locally to get credentials
  if (!process.env.SAUCE_USERNAME) {
    if (!fs.existsSync('sauce.json')) {
      console.log('Create a sauce.json with your credentials based on the sauce-sample.json file.');
      process.exit(1);
    } else {
      process.env.SAUCE_USERNAME = require('./sauce').username;
      process.env.SAUCE_ACCESS_KEY = require('./sauce').accessKey;
    }
  }

  var tunnelIdentifier = process.env.TRAVIS_JOB_NUMBER;

  // Browsers to run on Sauce Labs
  var customLaunchers = {
    "SL_Android_4.0": {
      base: "SauceLabs",
      browserName: "Android",
      platform: "Linux",
      version: "4.0"
    },
    // "SL_Android_4.1": {
    //   base: "SauceLabs",
    //   browserName: "Android",
    //   platform: "Linux",
    //   version: "4.1"
    // },
    // "SL_Android_4.2": {
    //   base: "SauceLabs",
    //   browserName: "Android",
    //   platform: "Linux",
    //   version: "4.2"
    // },
    // "SL_Android_4.3": {
    //   base: "SauceLabs",
    //   browserName: "Android",
    //   platform: "Linux",
    //   version: "4.3"
    // },
    // "SL_Android_4.4": {
    //   base: "SauceLabs",
    //   browserName: "Android",
    //   platform: "Linux",
    //   version: "4.4"
    // },
    // "SL_Android_5.0": {
    //   base: "SauceLabs",
    //   browserName: "Android",
    //   platform: "Linux",
    //   version: "5.0"
    // },
    // "SL_Android_5.1": {
    //   base: "SauceLabs",
    //   browserName: "Android",
    //   platform: "Linux",
    //   version: "5.1"
    // },
    // "SL_Chrome": {
    //   base: "SauceLabs",
    //   browserName: "Chrome",
    //   platform: "Windows 8.1"
    // },
    // "SL_Chrome_Linux": {
    //   base: "SauceLabs",
    //   browserName: "Chrome",
    //   platform: "Linux"
    // },
    // "SL_Chrome_OSX": {
    //   base: "SauceLabs",
    //   browserName: "Chrome",
    //   platform: "OS X 10.10"
    // },
    // "SL_Firefox": {
    //   base: "SauceLabs",
    //   browserName: "Firefox",
    //   platform: "Windows 8.1"
    // },
    // "SL_Firefox_Linux": {
    //   base: "SauceLabs",
    //   browserName: "Firefox",
    //   platform: "Linux"
    // },
    // "SL_Firefox_OSX": {
    //   base: "SauceLabs",
    //   browserName: "Firefox",
    //   platform: "OS X 10.10"
    // },
    // "SL_IE_9": {
    //   base: "SauceLabs",
    //   browserName: "Internet Explorer",
    //   platform: "Windows 7",
    //   version: "9"
    // },
    // "SL_IE_10": {
    //   base: "SauceLabs",
    //   browserName: "Internet Explorer",
    //   platform: "Windows 8",
    //   version: "10"
    // },
    // "SL_IE_11": {
    //   base: "SauceLabs",
    //   browserName: "Internet Explorer",
    //   platform: "Windows 8.1",
    //   version: "11"
    // },
    // "SL_IOS_6": {
    //   base: "SauceLabs",
    //   browserName: "iPhone",
    //   platform: "OS X 10.8",
    //   version: "6.1"
    // },
    // "SL_IOS_7": {
    //   base: "SauceLabs",
    //   browserName: "iPhone",
    //   platform: "OS X 10.9",
    //   version: "7.1"
    // },
    // "SL_IOS_8": {
    //   base: "SauceLabs",
    //   browserName: "iPhone",
    //   platform: "OS X 10.10",
    //   version: "8.1"
    // },
    // "SL_Opera": {
    //   base: "SauceLabs",
    //   browserName: "opera",
    //   platform: "Windows 7"
    // },
    // "SL_Opera_Linux": {
    //   base: "SauceLabs",
    //   browserName: "opera",
    //   platform: "Linux"
    // },
    // "SL_Safari_5": {
    //   base: "SauceLabs",
    //   browserName: "Safari",
    //   platform: "OS X 10.6",
    //   version: "5"
    // },
    // "SL_Safari_6": {
    //   base: "SauceLabs",
    //   browserName: "Safari",
    //   platform: "OS X 10.8",
    //   version: "6"
    // },
    // "SL_Safari_7": {
    //   base: "SauceLabs",
    //   browserName: "Safari",
    //   platform: "OS X 10.9",
    //   version: "7"
    // },
    // "SL_Safari_8": {
    //   base: "SauceLabs",
    //   browserName: "Safari",
    //   platform: "OS X 10.10",
    //   version: "8"
    // }
  };

  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jspm', 'jasmine'],

    jspm: {
      // Edit this to your needs
      loadFiles: ['src/**/*.js', 'test/**/*.js'],
      serveFiles: ['src/**/*.js', 'test/**/*.js'],
      paths: {
        '*': '*.js'
      }
    },


    // list of files / patterns to load in the browser
    files: [],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'test/**/*.js': ['babel'],
      'src/**/*.js': ['babel']
    },
    'babelPreprocessor': {
      options: {
        sourceMap: 'inline',
        modules: 'amd',
        moduleIds: false,
        loose: "all",
        optional: [
          "es7.decorators"
        ]
      }
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['dots', 'saucelabs'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    sauceLabs: {
      testName: 'Aurelia Logger Tests',
      startConnect: true
    },

    captureTimeout: 120000,
    browserNoActivityTimeout: 0,

    customLaunchers: customLaunchers,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: Object.keys(customLaunchers),


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });

  if (process.env.TRAVIS)    {
    label = "TRAVIS #" + process.env.TRAVIS_BUILD_NUMBER + " (" + process.env.TRAVIS_BUILD_ID + ")";

    config.captureTimeout = 0;
    // config.logLevel = config.LOG_DEBUG;
    config.transports = [
      "websocket"
    ];

    config.sauceLabs.build = label;
    config.sauceLabs.startConnect = false;
    config.sauceLabs.recordScreenshots = true;
    config.sauceLabs.tunnelIdentifier = process.env.TRAVIS_JOB_NUMBER;
    config.sauceLabs.testName = "Aurelia Logger CI";
  }
};
