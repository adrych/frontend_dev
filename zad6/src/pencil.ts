export interface pencil{
    color: string;
    hardness: string;
}


class Pencil{
    constructor(public color:string, public hardness: string, public qty: number){
        this.color = color;
        this.hardness = hardness;
        this.qty = qty;
    }

}