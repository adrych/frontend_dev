
const express = require('express')
const app     = express()
const http    = require('http').Server(app)
const io      = require('socket.io')
const Rx      = require('rxjs')
const port    = process.env.PORT || 3000

// Serve static files from 'public' directory
// Serves index.html by default from '/' route
app.use(express.static('public'))

// Listen for requests
http.listen(port, () => console.log('listening on port: ' + port))

const io$ = Rx.Observable.of(io(http))

// Stream of connections
const connection$ = io$
  .switchMap(io => {
    return Rx.Observable.fromEvent(io, 'connection')
      .map(client => ({ io, client })) // Forward io and client objects
  })

// Stream of disconnections
const disconnect$ = connection$
  .mergeMap(({ client }) => {
    return Rx.Observable.fromEvent(client, 'disconnect')
      .map(() => client) // Forward client object
  })