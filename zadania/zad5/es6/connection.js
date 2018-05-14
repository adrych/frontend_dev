

import Rx from 'rxjs'
import io from 'socket.io-client'

// Initialise Socket.IO and wrap in observable
const socket$ = Rx.Observable.of(io())

// Stream of connections
const connect$ = socket$
  .switchMap(socket => {
    return Rx.Observable.fromEvent(socket, 'connect')
      .map(() => socket)
  })

// Stream of disconnections
const disconnect$ = socket$
  .switchMap(socket => {
    return Rx.Observable.fromEvent(socket, 'disconnect')
  })

// Temporary subscriptions
connect$.subscribe(() => console.log('connected'))
disconnect$.subscribe(() => console.log('disconnected'))

