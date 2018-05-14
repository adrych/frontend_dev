'use strict';

console.log("Laduje");
document.addEventListener('keydown', function (event) {
    if (event.keyCode == 37) {
        console.log("LEFT");
    } else if (event.keyCode == 39) {
        console.log("RIGHT");
    } else {
        console.log(event.keyCode);
    }
});