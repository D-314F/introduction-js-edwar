//Fabian Guzman Villegas
// Los booleanos tienen dos valores falso y verdadero

let age = 42;
// Mayor que 
let IsOlderThan = age >= 18 ;

console.log(IsOlderThan);

//=========================================

let userName = "Fabián";

let haveName = userName !== "";

console.log(haveName);
//=========================================
// En JS 0 es false, pero cualquier número distinto de cero es truthy.
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(10));
console.log(Boolean(-5));
console.log(typeof Boolean(-5));
//=========================================
// En JS null or undefined siempre se convierten en false.
let nullValue = null;
let underfinedValue;

console.log(Boolean(nullValue));
console.log(Boolean(underfinedValue));
//=========================================
// Los booleanos son la base de las deicsiones en los programas
let haveAccess = false;

if (haveAccess) {
    console.log('Welcome to system');
}else {
    console.log('Acces Denied');
}