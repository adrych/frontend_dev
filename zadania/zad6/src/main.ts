"use strict";

interface Pencils {
    name: String;
    type: String;
    hardness: String;
    color: String;
    quantity: Number;
}



class Pencil {

    constructor (public name:String, public type:String, public hardness:String, 
        public color:String, public quantity:Number) {
        this.name = name;
        this.type = type;
        this.hardness = hardness;
        this.color = color;
        this.quantity = quantity;
    }

    toString() {
        return `${this.name} | qty: ${this.quantity} pcs`
    }

    print(){
        console.log(this.toString());
    }

    add_qty(x: Number) {
        //this.quantity = Number(1) + Number(this.quantity);
        this.quantity = +x + +this.quantity;
    }

    public set quantit(qty: Number){
        this.quantity = qty;
    }

}



class CPencil extends Pencil {
    constructor(public name:String, public type:String, public hardness:String, 
        public color:String, public quantity:Number, public width:Number)
        {
            super(name, type, hardness, color, quantity);
            this.width = width;
        }

        print2() {
            console.log(`${this.name} with width: ${this.width}`);
        }

}

const olowek = new Pencil('Olowek','regular','HB','blue',10);

//console.log(olowek.name);
olowek.print()
olowek.add_qty(5)
olowek.print()
olowek.quantit = 5;
olowek.print();

const Stolarza = new CPencil('Stolarski','specjal','HBB','blue',1, 0.25)
Stolarza.print();
Stolarza.print2();