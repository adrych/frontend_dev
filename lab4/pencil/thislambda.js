var doubles = [1,2,3].map(item => item * 2);

doubles.forEach(item => console.log(item));

var events = [1,2,3,4,5,6].filter(v => v % 2 === 0);
events.forEach(item => console.log(item));

/*
var aShape = {
    x: 4,
    y: 3,
    move: delta => x += delta
};

aShape.move(5);
console.log(aShape.move(5));
*/

var aShape = {
  numbers: [1,2,3,4,5,6],
  scale: 2,
  move() {
    console.log(this.scale);
    var self = this; //var that = this -- ianczej wewnatrz funkcji this wiaze do czegos innego
    this.numbers = this.numbers.map(function(element) {
      return element * self.scale;
    });
  }
};

aShape.move();
aShape.numbers.forEach(element => {
  console.log(element);
});


var aShape2 = {
  numbers: [1,2,3,4,5,6],
  scale: 2,
  move() {
    console.log(this.scale);
    this.numbers = this.numbers.map(element => element * this.scale);
  }
};
  
aShape2.move();
aShape2.numbers.forEach(element => {
  console.log(element);
});
