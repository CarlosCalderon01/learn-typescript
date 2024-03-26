// ----- // ----- // ----- // ----- // ----- // ----- // ----- //

/*
  - Topic: Primitive Types
    - boolean
    - number
    - string
    - void
    - undefined
    - null
*/

// ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// boolean --> 
// ----- // ----- // ----- // ----- // ----- // ----- // ----- //
const valueBoolean1: boolean = true
const valueBoolean2: boolean = false

// ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// number --> 
// ----- // ----- // ----- // ----- // ----- // ----- // ----- //
const valueNumber1: number = 42 // Integer
const valueNumber2: number = 3.14 // Float

// ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// String -->
// ----- // ----- // ----- // ----- // ----- // ----- // ----- //
const valueString1: string = 'John Doe'

// ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// Void -->
// ----- // ----- // ----- // ----- // ----- // ----- // ----- //
function noop() {
  // void es el valor que retorno una funcion que no devuelve nada.
  return
}

// ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// undefined --> No Inicializado
// ----- // ----- // ----- // ----- // ----- // ----- // ----- //
function doSomething1(x: string | null) {
  if (x === null) {
    // do nothing
  } else {
    console.log('Hello, ' + x.toUpperCase())
  }
}

// ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// null -->
// ----- // ----- // ----- // ----- // ----- // ----- // ----- //
function doSomething2(x: string | null) {
  if (x === null) {
    // do nothing
  } else {
    console.log('Hello, ' + x.toUpperCase());
  }
}

// ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// TESTING VALUE
// ----- // ----- // ----- // ----- // ----- // ----- // ----- //

console.log('Valores Boleanos:' + valueBoolean1, valueBoolean2)
console.log('Valores Enteros:' + valueNumber1, valueNumber2)
console.log('Valores Cadena:' + valueString1)
console.log(noop)
console.log(doSomething1)
console.log(doSomething2)

// ----- // ----- // ----- // ----- // ----- // ----- // ----- //
// END TOPIC - SO GOOD!
// ----- // ----- // ----- // ----- // ----- // ----- // ----- //
