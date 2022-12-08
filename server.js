#!/usr/bin/env node

/**
 * Module dependencies.
 */

<<<<<<< HEAD
var app = require('./config/app');
var debug = require('debug')('week-3:server');
var http = require('http');
=======
var app = require("./config/app");
var debug = require("debug")("week-3:server");
var http = require("http");
>>>>>>> 0e4af0f18247863dfd09d529903ea340caa85528

/**
 * Get port from environment and store in Express.
 */

<<<<<<< HEAD
var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);
=======
var port = normalizePort(process.env.PORT || "3000");
app.set("port", port);
>>>>>>> 0e4af0f18247863dfd09d529903ea340caa85528

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
<<<<<<< HEAD
server.on('error', onError);
server.on('listening', onListening);
=======
server.on("error", onError);
server.on("listening", onListening);
>>>>>>> 0e4af0f18247863dfd09d529903ea340caa85528

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
<<<<<<< HEAD
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
=======
  if (error.syscall !== "listen") {
    throw error;
  }

  var bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
>>>>>>> 0e4af0f18247863dfd09d529903ea340caa85528
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
<<<<<<< HEAD
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
=======
  var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  debug("Listening on " + bind);
>>>>>>> 0e4af0f18247863dfd09d529903ea340caa85528
}
