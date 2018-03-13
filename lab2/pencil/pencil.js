var pencil = {};


pencil = (function() {
    var MyInterface = {}
    var softness = ['9H','8H','7H','6H','5H','HB','HH'];
    var colour =['black','blue','red'];
    var brand;
    

    var maintanance = function(where, what){
        return where(what);
    };

    var softnes_adding = function(a){
        softness.push(a)
        return a
    }

    MyInterface.softness = softness;
    MyInterface.colour = colour;

    return MyInterface;    
})();


console.log(pencil.softness);
console.log(pencil.colour[1]);