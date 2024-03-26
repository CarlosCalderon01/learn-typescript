// ----- // ----- // ----- // ----- // ----- // ----- // ----- //

/* Topic: Object Types
    - interface
    - class
    - enum
    - arrays
    - tuples
*/

// ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// Interface --> use for specify type object
// ----- // ----- // ----- // ----- // ----- // ----- // ----- //

// ----- >>>>> USE: CALL_ANONYMOUS
interface Usuario {
    name: string;
    age: number;
}

function mencionarUsuario(objUsuario1: { name: string; age: number }) {
    return 'TESTING CALL_ANONYMOUS --> Nombre: ' + objUsuario1.name + ' ' + 'Edad: ' + objUsuario1.age;
}

const ObjPersona1 = { name: "Juan", age: 25 };
const result1 = mencionarUsuario(ObjPersona1);
console.log(result1);

/*
    WHY IS ANONYMOUS?
        - Dont use in anybody moment interface Usuario. that is ANONYMOUS
*/

// ----- >>>>> USE: CALL_INTERFACE
interface Vehicle {
    marca: string;
    precio: number;
}
const objVehicle1: Vehicle = {
    marca: "Nisan",
    precio: 3000000,
};

function mencionarVehicle(objVehicle1: Vehicle) {
    return 'TESTING CALL_INTERFACE --> Marca:' + objVehicle1.marca + ' ' + 'Precio:' + objVehicle1.precio;
}
const redult2 = mencionarVehicle(objVehicle1);
console.log(redult2);

/*
    WHY IS INTERFACE?
        - Create Objet use INTERFACE
        - Func take a obj: tipo Vehicle
*/

// ----- >>>>> USE: CALL_TYPE_ALIAS
type Libro = {
    titulo: string;
    autor: string;
}
const objLibro1: Libro = {
    titulo: "Rey de los anillos",
    autor: "Bilbo bolson"
};

function mencionarLibro(objLibro1: Libro) {
    return 'TESTING CALL_TYPE_ALIAS --> Titulo: ' + objLibro1.titulo + ' ' + 'Autor: ' + objLibro1.autor;
}
const result3 = mencionarLibro(objLibro1);
console.log(result3);

// ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// Class --> Class is a blueprint for create Models and manage object
// ----- // ----- // ----- // ----- // ----- // ----- // ----- //
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
        console.log(`TESTING CLASS --> ${this.year} ${this.make} ${this.model}`);
    }
}
const objCar1 = new Car("Toyota", "Camry", 2022);
objCar1.drive();

// ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// Enum --> It allows a developer to define a set of named constants
// ----- // ----- // ----- // ----- // ----- // ----- // ----- //
enum dataInfoPage {
    url = "https://github.com/CarlosCalderon01/RoadMap_TypeScript",
    title = "RoadMap_TypeScript",
    description = "this page is for leanr TypeScript",
    alt = "learn",
    Code = 8000,
    StatusPage = "DISABLE"
}

let valueDataInfoPage: dataInfoPage = dataInfoPage.StatusPage;
console.log(valueDataInfoPage);

// ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// Arrays --> 
// ----- // ----- // ----- // ----- // ----- // ----- // ----- //
let objArrayNumber1: number[] = [1, 2, 3, 4, 5];
let duplicados: number[] = objArrayNumber1.map(numero => numero * 2);
let pares: number[] = objArrayNumber1.filter(numero => numero % 2 === 0);
let suma: number = objArrayNumber1.reduce((total, numero) => total + numero, 0);

console.log("TESTING ARRAY --> duplicados: " + duplicados);
console.log("TESTING ARRAY --> pares: " + pares);
console.log("TESTING ARRAY --> suma: " + suma);

// ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// Tuples --> arreglos que contienen 2 tipos de valores
// ----- // ----- // ----- // ----- // ----- // ----- // ----- //

type MyTuplePerson = [string, number, boolean] // Create Tuple
type MyTupleNumber = [number, number, number] // Create Tuple
type MyTupleString = [string, string, string] // Create Tuple

let objTuplePerson1: MyTuplePerson = ["carlitos", 34, true] // Insta Obj
let objTupleNumber1: MyTupleNumber = [2, 4, 6] // Insta Obj
let objTupleString1: MyTupleString = ["carlos", "albert", "wesker"] // Insta Obj


for (const element of objTuplePerson1) {
    console.log(element);
}

const resultTuple1: MyTupleNumber = objTupleNumber1.map((element) => element * 2) as MyTupleNumber;
console.log(resultTuple1);

const resultTuple2: MyTupleString = objTupleString1.filter((element) => typeof element === "string") as MyTupleString;
console.log(resultTuple2);

const resultTuple3: number = objTupleNumber1.reduce((acc, curr) => acc + (typeof curr === "number" ? curr : 0), 0);
console.log(resultTuple3);

// ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// END TOPIC - SO GOOD!
// ----- // ----- // ----- // ----- // ----- // ----- // ----- //
