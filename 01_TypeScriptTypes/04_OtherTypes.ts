// ----- // ----- // ----- // ----- // ----- // ----- // ----- //

/* Topic: Other Types
    - any
    - object
    - unknown
    - never
*/

// ----- // ----- // ----- // ----- // ----- // ----- // ----- //

// - any -->  you can use whenever you don’t want a particular value to cause typechecking errors.

let nameVar1: number = 1;
let nameVar2: string = "carlitos"

let nameVar3: any = nameVar1 || nameVar2;
console.log(nameVar3)

// - object -->

// The parameter's type annotation is an object type
function printCoord(pt: { x: number; y: number }) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 3, y: 7 });

// - unknown
// - never