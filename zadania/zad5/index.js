var Rx = require('rxjs/Rx');

var myObservable = Rx.Observable.range(0, 10);


var myObserver = {
    next: item => console.log(`Next ${item}`),
    error: ex => console.log(`Exception ${ex}`),
    complete: () => console.log(`Completed`)
};



myObservable.subscribe(myObserver);
