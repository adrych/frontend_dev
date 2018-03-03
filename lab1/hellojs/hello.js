console.log("Hello World!!");
var obj = {
    'imie': 'Jan',
    nazwisko: 'Kowalski',
    rokU: 1893

}
console.log(obj.imie);

obj.miasto = "Gdansk";
console.log(obj.miasto);

console.log(obj['miasto']);

var someArray = [1,2,"trzy"];

someArray.push(5);
console.log(typeof someArray);

someArray.miasto = "Gdansk";
console.log(someArray.miasto);
console.log(someArray.length);

console.log(typeof new Number(2));
console.log(typeof null);

var add = function (a ,b){
    return a+b;
}
console.log(add(2,3));

function multiply(a,b){
    return a*b;
}

console.log(multiply(2,4));

//funkcja jako argument innej funkcji

var higherorder = function(a, b){
    return a(b) + b;
};

function multiply(a){
    return a*a;
}


function divide(a){
    return a/2;
}

console.log(higherorder(multiply,4));
console.log(higherorder(divide,4));

//funkcja zwraca funkcje
var someFun = function(){
    return function(){

    };
};



var counter = function(){
    
    var i = 0;
    return function(){
        return ++i;
    };
}(); //() - zamienia w IEF


/*
var c = counter();
var d = counter();
console.log(typeof c);



c();
c();
c();

d();
d();
console.log(c());
console.log(d());
*/

counter();
counter();
counter();
console.log(counter());


var lib = {}

lib = (function() {

    var MyInterface = {
            message : priv2 + "World",
            counter : function() {
                return ++c;
                },
            sayHello: function(name) {
                return "Hello " + name;
                }
            };
    var c = 0;
    var priv2 = "Hello";
    return MyInterface; 
    })();


console.log(lib.sayHello('Ziutek'));
console.log(lib.counter());
