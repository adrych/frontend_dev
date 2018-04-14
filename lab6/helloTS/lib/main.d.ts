interface Person {
    name: string;
    yob: number;
    married: boolean;
    pesel?: number;
}
declare class Student {
    name: string;
    yob: number;
    married: boolean;
    constructor(name: string, yob: number, married: boolean);
}
declare function sayHello(person: Person): void;
declare let zenek: Student;
declare let ziutek: {
    name: string;
    yob: number;
    married: boolean;
};
declare let myList: Person[];
declare let myTuple: [string, number];
declare enum Color {
    Red = 0,
    Gren = 1,
    Blue = 2,
}
declare let smthing: any;
