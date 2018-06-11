var lib = {};
class Pencil {
  //"use strict";

  constructor(softness, colour, size) {
    //let softness = ["9H", "8H", "7H", "6H", "5H", "HB", "HH"];
    //let colour = ["black", "blue", "red"];
    this.colour = colour;;
    this.softness = softness;
    this.size = size;
  }

  about() {
    return `Pencil colour ${this.colour}, ${this.softness} hard and size ${this.size}`;
  }
}

class Carpenter_pencil extends Pencil {

  constructor(softness, colour, size, shape) {
    super(softness, colour, size, "oval");
  }
}

class Order {

  constructor(location, name) {
    this.name = name;
    this.location = location;
  }

  add_item(item) {
    this.name.push(item);
  }

  get_items() {
    return `Items on order ${this.name}`;
  }

  get_order_size() {
    return this.name.size();
  }
}

let olowek_green = new Pencil('AA', 'green', 12);
let olowek_blue_h = new Pencil('HB', 'blue', 12);
let stolarski_red = new Carpenter_pencil('AA', 'green', 12);
//let olowek = new lib.pencil('AA','green', 12);
console.log(olowek_green.about());

Zamowiene = new Order("Magazyn", [olowek_green, olowek_blue_h, stolarski_red]);

console.log(JSON.parse(JSON.stringify(Zamowiene.get_items())));

//console.log(olowek.add_softness('RR'));


//lib.pencil.get_softness(2);
//console.log(lib.pencil.get_softness(2));
//console.log(lib.pencil.get_filter("9H"));
//console.log(lib.pencil.add_softness("D"));
//console.log(lib.pencil.get_color(2));
