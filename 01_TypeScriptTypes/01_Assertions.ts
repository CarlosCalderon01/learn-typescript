// ----- // ----- // ----- // ----- // ----- // ----- // ----- //

/* Topic: Assertions
    - as const
    - as [type]
    - as any
*/

// Example: as const --> it only allow read params
const colors = ['red', 'green', 'blue'] as const;
let x = "hello" as const;
let y = <const>[10, 20];

// Example: as [type] --> indicate data type
let someValue: any = "Hello, TypeScript!";
let strLength: number = (someValue as string).length;

// Example: as any --> indicates that the value is of any type
let anyValue: any = 42;

// ----- // ----- // ----- // ----- // ----- // ----- // ----- //