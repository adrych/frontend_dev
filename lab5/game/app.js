var requirejs = require('requirejs');

requirejs.config({
    //Use node's special variable __dirname to
    //get the directory containing this file.
    //Useful if building a library that will
    //be used in node but does not require the
    //use of node outside
    baseUrl: __dirname,

    //Pass the top-level main.js/index.js require
    //function to requirejs so that node modules
    //are loaded relative to the top-level JS file.
    nodeRequire: require
});


var Rx = require('rxjs/Rx');

var bfield = $('#bfield'),
    box = $('#box'),
    w = bfield.width() - box.width(),
    d = {},
    x = 3;

function newv(v,a,b) {
    var n = parseInt(v, 10) - (d[a] ? x : 0) + (d[b] ? x : 0);
    return n < 0 ? 0 : n > w ? w : n;
}

$(window).keydown(function(e) { d[e.which] = true; });
$(window).keyup(function(e) { d[e.which] = false; });

setInterval(function() {
    box.css({
        left: function(i,v) { return newv(v, 37, 39); },
        top: function(i,v) { return newv(v, 38, 40); }
    });
}, 20);

Rx.Observable.range(0, 5)
    .map(item => Rx.Observable.range(0, item))
    .switchMap(item => item)
    .subscribe({
        next: item => console.log(`Next ${item}`),
        error: ex => console.log(`Exception ${ex}`),
        complete: () => console.log(`Complited`)

    });

function randomMove(){
    return Math.floor(Math.random() * 4 +1);
}

Rx.Observable.timer(0, 1000).map(x => randomMove()).subscribe({ next: x => console.log(x)});