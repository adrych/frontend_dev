interface Pencils {
    name: String;
    type: String;
    hardness: String;
    color: String;
    quantity: Number;
}
declare class Pencil {
    name: String;
    type: String;
    hardness: String;
    color: String;
    quantity: Number;
    constructor(name: String, type: String, hardness: String, color: String, quantity: Number);
    toString(): string;
    print(): void;
    add_qty(x: Number): void;
    quantit: Number;
}
declare class CPencil extends Pencil {
    name: String;
    type: String;
    hardness: String;
    color: String;
    quantity: Number;
    width: Number;
    constructor(name: String, type: String, hardness: String, color: String, quantity: Number, width: Number);
    print2(): void;
}
declare const olowek: Pencil;
declare const Stolarza: CPencil;
