var express = require('express');
var morgan = require('morgan');

var backgroundMode = ~process.argv.indexOf('--background');
var silentMode = ~process.argv.indexOf('--silent');

module.exports = function modes(app) {
  var router = express.Router();

  if (backgroundMode) {
    // Don't stop the server on SIGINT
    process.on('SIGINT', function() {});

    // Expose an HTTP endpoint to stop the server
    router.use('/stop', process.exit);
  }

  if (!silentMode) {
    router.use(morgan('dev'));

    console.log('\n' +
      ' _____               _         _   _           \n' +
      '|_   _|___ ___ ___ _| |___ ___| |_| |_ ___ ___ \n' +
      '  | | |  _| -_|   | . |_ -| -_|  _|  _| -_|  _|\n' +
      '  |_| |_| |___|_|_|___|___|___|_| |_| |___|_|  \n' +
      '                                               \n' +
      '   is now running at http://localhost:8080/    \n'
    );
  }

  return router;
}
