"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Student = //name: string;
function Student(name, yob, married) {
  _classCallCheck(this, Student);

  this.name = name;
  this.yob = 1967;
  this.married = false;
};

function sayHello(person) {
  console.log('Hello ' + person.name);
}

var zenek = new Student('Zenon', 2006, false);
console.log(zenek.name);
var ziutek = {
  name: 'Ziutek',
  yob: 1967,
  married: true
};
sayHello(ziutek);
sayHello(zenek);
var myList = [ziutek, zenek];
var myTuple = ["Fiat", 1998];
console.log(myTuple[0]);
var Color;

(function (Color) {
  Color[Color["Red"] = 0] = "Red";
  Color[Color["Gren"] = 1] = "Gren";
  Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));

console.log(Color.Red);
var smthing = 5;
smthing = "Hello";