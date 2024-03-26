// ----- // ----- // ----- // ----- // ----- // ----- // ----- //

/* Topic: Other Types
    - any
    - object
    - unknown
    - never
*/

// ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// any --> you can use whenever you don’t want a particular value to cause typechecking errors.
// ----- // ----- // ----- // ----- // ----- // ----- // ----- //

let nameVar1: number = 1;
let nameVar2: string = "carlitos"
let nameVar3: any = nameVar1 || nameVar2;
console.log(nameVar3)

// ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// object --> To define an object type, we simply list its properties and their types.
// ----- // ----- // ----- // ----- // ----- // ----- // ----- //

function printCoord(pt: { x: number; y: number }) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 3, y: 7 });

// ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// unknown --> unknown is the type-safe counterpart of any
// ----- // ----- // ----- // ----- // ----- // ----- // ----- //

function f1(a: any) {
    a.b(); // OK
  }
  
  function f2(a: unknown) {
    // Error: Property 'b' does not exist on type 'unknown'.
    // a.b();
  }

// ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// never --> The never type represents the type of values that never occur
// ----- // ----- // ----- // ----- // ----- // ----- // ----- //

// Function returning never must not have a reachable end point
function error(message: string): never {
    throw new Error(message);
  }
  
  // Inferred return type is never
  function fail() {
    return error('Something failed');
  }
  
  // Function returning never must not have a reachable end point
  function infiniteLoop(): never {
    while (true) {}
  }

// ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// END TOPIC - SO GOOD!
// ----- // ----- // ----- // ----- // ----- // ----- // ----- //
