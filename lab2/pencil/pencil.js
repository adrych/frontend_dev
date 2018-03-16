var pencil = {};


pencil = (function() {
//var pencil = function(parameter) {
    //var MyInterface = {}
    var softness = ['9H','8H','7H','6H','5H','HB','HH'];
    var colour =['black','blue','red'];
    var brand;

    //MyInterface.softness = softness;
    //MyInterface.colour = colour;
    return {
        add_softness: function(soft){
            softness.push(soft);
            return 'Added: '+soft+ ' '+softness;
        },

        get_softness: function (s_id) {
            return softness[s_id];
        },
        get_colour: function (s_id) {
            return colour[s_id];
        },
        get_color: function (s_id) {
            return colour[s_id];
        }
    }
})();



console.log(pencil.get_softness(2));
console.log(pencil.add_softness('D'));
console.log(pencil.get_color(2));

//console.log(pencil.get_softness(1));
//console.log(pencil.softness);
//console.log(pencil.colour[1]);