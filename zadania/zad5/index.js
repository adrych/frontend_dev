var Rx = require('rxjs/Rx');

/*
var myObservable = Rx.Observable.range(0, 10);


var myObserver = {
    next: item => console.log(`Next ${item}`),
    error: ex => console.log(`Exception ${ex}`),
    complete: () => console.log(`Completed`)
};



myObservable.subscribe(myObserver);

*/

function randomMove(){
    return Math.floor(Math.random()*4+1);
}


Rx.Observable.timer(0, 1000).map(x => randomMove()).subscribe({ next: x => console.log(x)});
