'use strict';

var _rxjs = require('rxjs');

var _rxjs2 = _interopRequireDefault(_rxjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//let Rx = require('rxjs/Rx');

var offset = 10;

var box_x = 140;
var box_y = 140;
var battle_y = 200;
var battle_x = 200;

var canvas = document.getElementById('battlefield');
var cnt = canvas.getContext('2d');
var catchit = {};

var Warrior = function Warrior(radius, color, x) {
    _classCallCheck(this, Warrior);

    this.x = x, this.y = 0, this.offsetX = 5, this.offsetY = 5, this.radius = radius, this.color = color, this.offset = 10, this.drawit = function () {
        //console.log('drawit inside class');
        cnt.beginPath();
        cnt.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        cnt.fillStyle = this.color;
        cnt.fill();
        cnt.closePath();
    };
};

;

function Init() {
    catchit.human = new Warrior(20, '#d50', 0);
    catchit.bot = new Warrior(20, '#07e', 100);
    Reset();
}

function randomMove() {
    return Math.floor(Math.random() * 4 + 1);
}

//Rx.Observable.timer(0, 1000).map(x => randomMove()).subscribe({ next: x => console.log(x)});

function Reset() {
    //console.log('reset');
    catchit.human.x = canvas.width - 2 * catchit.human.radius;
    catchit.human.y = canvas.height - 2 * catchit.human.radius;
    catchit.bot.x = 2 * catchit.bot.radius;
    catchit.bot.y = 2 * catchit.bot.radius;
    //catchit.pauza            = true;
}

function keyDownHandler(e) {
    //console.log(`Key down ${e.keyCode}`);
    if (e.keyCode == 37) {
        catchit.human.Left = true;
    } else if (e.keyCode == 38) {
        catchit.human.Up = true;
    } else if (e.keyCode == 39) {
        catchit.human.Right = true;
    } else if (e.keyCode == 40) {
        catchit.human.Down = true;
    } else if (e.keyCode == 32) {
        catchit.pauza = !catchit.pauza;
    }
    //console.log(`keyDownHandler, ${catchit.human.y}`);
}

function keyUpHandler(e) {
    //console.log(`Key up ${e.keyCode}`);
    if (e.keyCode == 37) {
        catchit.human.Left = false;
    } else if (e.keyCode == 38) {
        catchit.human.Up = false;
    } else if (e.keyCode == 39) {
        catchit.human.Right = false;
    } else if (e.keyCode == 40) {
        catchit.human.Down = false;
    } else if (e.keyCode == 32) {
        catchit.pauza = !catchit.pauza;
    }
    //console.log(`keyUpHandler, ${catchit.human.y}`);
}

document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

function gotit(human, bot) {
    //console.log('gotit');
    var dx = Math.abs(human.x - bot.x);
    var dy = Math.abs(human.y - bot.y);
    if (dx > human.radius + bot.radius) {
        return false;
    }
    if (dy > human.radius + bot.radius) {
        return false;
    }
    if (dx <= human.radius) {
        return true;
    }
    if (dy <= human.radius) {
        return true;
    }
    dx = dx - human.radius;
    dy = dy - human.radius;
    return dx * dx + dy * dy <= bot.radius * human.radius;
}

// rysuj stan gry
function gamestatus() {
    //console.log(`gamestatus, Human: x ${catchit.human.x}, y: ${catchit.human.y}`);
    catchit.human.drawit();
    catchit.bot.drawit();
}

// wykonaj przeksztalcenia gry
function game_move() {
    //console.log(`game_move`);
    // przesuniecie pilki o offset
    catchit.bot.x += catchit.bot.offsetX;
    catchit.bot.y += catchit.bot.offsetY;

    if (catchit.human.Up && catchit.human.y > catchit.human.radius) {
        console.log('>game_move, Human up, ' + catchit.human.y + ', ' + catchit.human.offset);
        catchit.human.y -= catchit.human.offset;
        console.log('human at: ' + catchit.human.y);
    }

    if (catchit.human.Down && catchit.human.y + 2 * catchit.human.radius < canvas.height) {
        catchit.human.y += catchit.human.offset;
    }

    if (catchit.human.Left && catchit.human.x > 0) {
        catchit.human.x -= catchit.human.offset;
    }

    if (catchit.human.Right && catchit.human.x < canvas.width) {
        catchit.human.x += catchit.human.offset;
    }

    // got it finally
    if (catchit.human.x === catchit.bot.x & catchit.human.y === catchit.bot.y) {
        alert('Human win!');
        catchit.pauza = true;
    }
}

function theGame() {
    cnt.clearRect(0, 0, canvas.width, canvas.height);
    gamestatus();
    game_move();
    // odswiezanie
    //console.log('theGame');
    requestAnimationFrame(theGame);
}

Init();
theGame();