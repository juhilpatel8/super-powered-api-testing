var childProcess = require('child_process');
var path = require('path');

// Start the server as a background process, then exit
var server = path.join(__dirname, 'index.js');
childProcess.fork(server, ['--background', '--silent']);
process.exit();
