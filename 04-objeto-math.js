let result;
// Math es una plantilla o clase y permite sacar metodos que sacamos 5, y random
result = Math.PI; // 3.141592653589793
result = Math.round(2.7);
result = Math.round(2.1);
result = Math.ceil(2.1); //redondeo hacia arriba
result = Math.floor(2.8); //redondeo hacia abajo
result = Math.sqrt(16); // raiz cuadrada
result = Math.abs(-144); // valor absoluto
result = Math.min(1, 5, 85, 65, 7); // minimo
result = Math.max(1, 5, 85, 65, 7); // maximo
result = Math.random(); // numero aleatorio entre 0 y 1
result = Math.floor(Math.random() * 30); // numero aleatorio entre 0 y 30

// console.log(result);

// cuatro operaciones basicas con dos numeros enteros aleatorios no mayores a 100

let num1 = result;
result = Math.floor(Math.random() * 50); // numero aleatorio entre 0 y 100
let num2 = result;
result = Math.floor(Math.random() * 50); // numero aleatorio entre 0 y 100

console.log(num1, num2);

let si1 = 'Abajo estan las operaciones basicas';
console.log(si1);

let suma = num1 + num2;
console.log(suma);
let resta = num1 - num2;
console.log(resta);
let multiplicacion = num1 * num2;
console.log(multiplicacion);
let division = num1 / num2;
console.log(division);
