// ----- // ----- // ----- // ----- // ----- // ----- // ----- //

/* Topic: Object Types
    - interface
    - class
    - enum
    - arrays
    - tuples
*/

// - Interface --> allows you to specifically type an object using an interface
interface Person {
    name: string;
    age: number;
}

function greet(person: Person) {
    return 'Hello ' + person.name;
}

// - class --> TypeScript, a class is a blueprint for creating objects with specific properties and methods
class Car {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    drive() {
        console.log(`Driving my ${this.year} ${this.make} ${this.model}`);
    }
}

// - enum -->  It allows a developer to define a set of named constants
enum Direction {
    Up = 1,
    Down,
    Left,
    Right,
}

// - arrays
const namearrays: number[] = [1, 2, 3];

// - tuples --> arreglos que contienen 2 tipos de valores
type StringNumberPair = [string, number];
const pair: StringNumberPair = ['hello', 42];


// ----- // ----- // ----- // ----- // ----- // ----- // ----- //