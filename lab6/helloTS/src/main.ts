interface Person {
    name: string;
    yob: number;
    married: boolean;
    pesel?: number;
}

class Student {
    //name: string;
    constructor(public name: string, public yob: number, public married: boolean){
        this.name = name;
        this.yob = 1967;
        this.married = false
        
    }
}

function sayHello(person:Person){
    console.log('Hello ' + person.name);
}

let zenek = new Student('Zenon', 2006, false);
console.log(zenek.name)
let ziutek = { name: 'Ziutek', yob: 1967, married: true}

sayHello(ziutek);
sayHello(zenek);

let myList: Person[] = [ziutek, zenek]
let myTuple: [string, number] = ["Fiat",1998]
console.log(myTuple[0])

enum Color  {Red, Gren, Blue}
console.log(Color.Red)

let smthing : any = 5
smthing = "Hello"
