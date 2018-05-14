'use strict';

var _rxjs = require('rxjs');

var _rxjs2 = _interopRequireDefault(_rxjs);

var _socket = require('socket.io-client');

var _socket2 = _interopRequireDefault(_socket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Initialise Socket.IO and wrap in observable
var socket$ = _rxjs2.default.Observable.of((0, _socket2.default)());

// Stream of connections
var connect$ = socket$.switchMap(function (socket) {
  return _rxjs2.default.Observable.fromEvent(socket, 'connect').map(function () {
    return socket;
  });
});

// Stream of disconnections
var disconnect$ = socket$.switchMap(function (socket) {
  return _rxjs2.default.Observable.fromEvent(socket, 'disconnect');
});

// Temporary subscriptions
connect$.subscribe(function () {
  return console.log('connected');
});
disconnect$.subscribe(function () {
  return console.log('disconnected');
});