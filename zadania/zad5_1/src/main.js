'use strict';

//import Rx from 'rxjs'

let Rx = require('rxjs/Rx');

let offset = 10;

let box_x = 140;
let box_y = 140;
let battle_y = 200;
let battle_x = 200;
let bot_move = 0;

let canvas = document.getElementById('battlefield');
let cnt = canvas.getContext('2d');
let catchit = {};

class Warrior{
    constructor(radius, color, x) {
        this.x       = x,
        this.y       = 0,
        this.offsetX = 5,
        this.offsetY = 5,
        this.radius = radius,
        this.color   = color,
        this.offset = 10,
        this.drawit   = function() {
            //console.log('drawit inside class');
            cnt.beginPath();
            cnt.arc(this.x, this.y, this.radius, 0, Math.PI*2);
            cnt.fillStyle = this.color;
            cnt.fill();
            cnt.closePath();
        }
    }
};



function Init() {
    catchit.human  = new Warrior(20,  '#d50',0);
    catchit.bot  = new Warrior(20,  '#07e', 100);
    Reset();
}


function randomMove(){
    return Math.floor(Math.random()*4+1);
}



function Reset() {
    //console.log('reset');
    catchit.human.x          = canvas.width-2*catchit.human.radius;
    catchit.human.y          = canvas.height-2*catchit.human.radius;
    catchit.bot.x          = 2*catchit.bot.radius;
    catchit.bot.y          = 2*catchit.bot.radius;
    //catchit.pauza            = true;
}


function keyDownHandler(e) {
    //console.log(`Key down ${e.keyCode}`);
    if (e.keyCode == 37) { catchit.human.Left = true; } else
    if (e.keyCode == 38) { catchit.human.Up = true; } else
    if (e.keyCode == 39) { catchit.human.Right = true; } else
    if (e.keyCode == 40) { catchit.human.Down = true; } else
    if (e.keyCode == 32) { catchit.pauza = !catchit.pauza }
    //console.log(`keyDownHandler, ${catchit.human.y}`);
}

function keyUpHandler(e) {
    //console.log(`Key up ${e.keyCode}`);
    if (e.keyCode == 37) { catchit.human.Left = false; } else
    if (e.keyCode == 38) { catchit.human.Up = false; } else
    if (e.keyCode == 39) { catchit.human.Right = false; } else
    if (e.keyCode == 40) { catchit.human.Down = false; } else
    if (e.keyCode == 32) { catchit.pauza = !catchit.pauza }
    //console.log(`keyUpHandler, ${catchit.human.y}`);
}

document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

function gotit(human, bot){
    //console.log('gotit');
    let dx=Math.abs(human.x-(bot.x));
    let dy=Math.abs(human.y-(bot.y));
    if( dx > human.radius+bot.radius ){ return(false); }
    if( dy > human.radius+bot.radius ){ return(false); }
    if( dx <= human.radius ){ return(true); }
    if( dy <= human.radius ){ return(true); }
    dx=dx-human.radius;
    dy=dy-human.radius
    return(dx*dx+dy*dy<=bot.radius*human.radius);
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
    
    Rx.Observable.timer(0, 1000).map(x => randomMove()).subscribe({ next: x => bot_move = x});

    let x = bot_move;
    //console.log(bot_move);
    //catchit.bot.x += catchit.bot.offsetX;
    //catchit.bot.y +=  catchit.bot.offsetY;
    if (x === 1 && catchit.bot.y > catchit.bot.radius) {
        catchit.bot.y -=  catchit.bot.offsetY;
        
        }
    if (x === 2 && catchit.bot.y + catchit.bot.radius < canvas.height) {
            catchit.bot.y +=  catchit.bot.offsetY;
        }
    if (x === 3 && catchit.bot.x + catchit.bot.radius > 0) {
            catchit.bot.x -=  catchit.bot.offsetX;
        }
    if (x === 4 && catchit.bot.x < canvas.width - catchit.bot.radius) {
            catchit.bot.x +=  catchit.bot.offsetX;
        }
    if (catchit.human.Up && catchit.human.y > catchit.human.radius) {
        //console.log(`>game_move, Human up, ${catchit.human.y}, ${catchit.human.offset}`);
        catchit.human.y -= catchit.human.offset;
        //console.log(`human at: ${catchit.human.y}`);
        }

    if (catchit.human.Down && catchit.human.y + 2*catchit.human.radius < canvas.height) {
            catchit.human.y += catchit.human.offset;
        }

    if (catchit.human.Left && catchit.human.x > 0) {
            catchit.human.x -= catchit.human.offset;
        }
    
    if (catchit.human.Right && catchit.human.x < canvas.width) {
            catchit.human.x += catchit.human.offset;
        }

    // got it finally
    if (catchit.human.x === catchit.bot.x & catchit.human.y ===catchit.bot.y)
        {alert('Human win!')
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