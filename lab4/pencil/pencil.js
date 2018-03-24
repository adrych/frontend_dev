var lib = {};
lib.pencil = (class {
  //"use strict";
    
  constructor(soft, colo){
    let softness = ["9H", "8H", "7H", "6H", "5H", "HB", "HH"];
    let colour = ["black", "blue", "red"];
    this.colour = colo;
    this.softness = soft;
  }
  
  add_softness(soft)  {
    this.softness.push(soft);
    return `Added:  ${soft} softness`;
  }
  /*   
    ,
    get_softness: function (s_id) {
      return softness[s_id];
    },
    get_colour: function (s_id) {
      return colour[s_id];
    },
    get_color: function (s_id) {
      return colour[s_id];
    },
    get_filter: function (s_name) {
      return softness.filter(function () {return softness === s_name;});}
    */
});


var olowek = new lib.pencil('AA','green');
console.log(olowek);
console.log(olowek.add_softness('RR'));


//lib.pencil.get_softness(2);
//console.log(lib.pencil.get_softness(2));
//console.log(lib.pencil.get_filter("9H"));
//console.log(lib.pencil.add_softness("D"));
//console.log(lib.pencil.get_color(2));