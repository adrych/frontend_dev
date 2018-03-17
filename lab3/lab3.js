///var someObject = {};

//console.log(someObject.toString());

function Shape (x, y) {
	this.x = x;
	this.y = y;
}


Shape.prototype.message = function () {
	console.log("Hello message");
};



Shape.prototype.getX = function () {
	return this.x;
};

Shape.prototype.getY = function () {
	return this.y;
};

Shape.prototype.move = function (deltaX, deltaY) {
	this.x += deltaX;
	this.y += deltaY;
}

var aShape = new Shape(2, 1);

aShape.message(); 







//console.log(aShape.toString());
//console.log(aShape.x);




function create(proto) {
	function F() {}
	F.prototype = proto;
	F.prototype.sayHello = function () {
		return "Hello";
	};
	
	return new F();
}

var base = {
	x: 5,
	y: 7,
	getX: function(){
		return this.x;
	},
	getY: function(){
		return this.y;
	}
};


var someBase = create(base);
console.log(someBase.getX());

var someExtension = create(base);
console.log(someExtension.getX());
console.log(someExtension.sayHello());



//dziedziczeniex



function Circle(x, y, r){
	Shape.call(this, x, y);
	this.r = r;
};

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle; //doczytac!!

Circle.prototype.area = function () {
	return Math.PI * this.r * this.r;
};

var aCircle = new Circle(20, 30, 2);

console.log(aCircle.area());

//zrobic dziedziczenie dwuStopniowe