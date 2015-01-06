System.register([], function (_export) {
  "use strict";

  var levels, loggers, logLevel, appenders, slice, loggerConstructionKey, Logger;
  _export("getLogger", getLogger);

  _export("addAppender", addAppender);

  _export("setLevel", setLevel);

  function log(logger, level, args) {
    var i = appenders.length, current;

    args = slice.call(args);
    args.unshift(logger);

    while (i--) {
      current = appenders[i];
      current[level].apply(current, args);
    }
  }

  function debug() {
    if (logLevel < 4) {
      return;
    }

    log(this, "debug", arguments);
  }

  function info() {
    if (logLevel < 3) {
      return;
    }

    log(this, "info", arguments);
  }

  function warn() {
    if (logLevel < 2) {
      return;
    }

    log(this, "warn", arguments);
  }

  function error() {
    if (logLevel < 1) {
      return;
    }

    log(this, "error", arguments);
  }

  function connectLogger(logger) {
    logger.debug = debug;
    logger.info = info;
    logger.warn = warn;
    logger.error = error;
  }

  function createLogger(id) {
    var logger = new Logger(id, loggerConstructionKey);

    if (appenders.length) {
      connectLogger(logger);
    }

    return logger;
  }

  function getLogger(id) {
    return loggers[id] || (loggers[id] = createLogger(id));
  }

  function addAppender(appender) {
    appenders.push(appender);

    if (appenders.length === 1) {
      for (var key in loggers) {
        connectLogger(loggers[key]);
      }
    }
  }

  function setLevel(level) {
    logLevel = level;
  }

  return {
    setters: [],
    execute: function () {
      levels = _export("levels", {
        none: 0,
        error: 1,
        warn: 2,
        info: 3,
        debug: 4
      });
      loggers = {};
      logLevel = levels.none;
      appenders = [];
      slice = Array.prototype.slice;
      loggerConstructionKey = {};
      Logger = function Logger(id, key) {
        if (key !== loggerConstructionKey) {
          throw new Error("You cannot instantiate \"Logger\". Use the \"getLogger\" API instead.");
        }

        this.id = id;
      };

      Logger.prototype.debug = function () {};

      Logger.prototype.info = function () {};

      Logger.prototype.warn = function () {};

      Logger.prototype.error = function () {};

      _export("Logger", Logger);
    }
  };
});