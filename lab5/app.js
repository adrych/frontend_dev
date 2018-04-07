var q = $('#q');
var keyups = Rx.Observable.fromEvent(q, 'keyup');

keyups.throttleTime(500).map(function(x) {
        return q.val();
    })
    .switchMap  

