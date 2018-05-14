'use strict';

var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io');
var Rx = require('rxjs');
var port = process.env.PORT || 3000;

// Serve static files from 'public' directory
// Serves index.html by default from '/' route
app.use(express.static('public'));

// Listen for requests
http.listen(port, function () {
  return console.log('listening on port: ' + port);
});

var io$ = Rx.Observable.of(io(http));

// Stream of connections
var connection$ = io$.switchMap(function (io) {
  return Rx.Observable.fromEvent(io, 'connection').map(function (client) {
    return { io: io, client: client };
  }); // Forward io and client objects
});

// Stream of disconnections
var disconnect$ = connection$.mergeMap(function (_ref) {
  var client = _ref.client;

  return Rx.Observable.fromEvent(client, 'disconnect').map(function () {
    return client;
  }); // Forward client object
});