// Arrow function
// En JS es una forma mas corta de escribir funciones usando la sintaxis () =>

    //Sistemas mas breve, ideal para funciones pequeñas 
    //NO tienes su propio contexto "this", hereda el this del contexto donde se define. 

    const add = function (){
        console.log(16 + 3);
    }

    add();


//function con parametros 
const add2 = function (num1, num2){
    console.log(num1 + num2);
}
add2(4, 8);

//Las llaves son opcionalles cuando después de la flecha solo tengo una senstencia
const add3 = (num3, num4) => console.log(num3 + num4);
add3(6, 9);

// Otro ejemplo 
// const learn = (technology) => {
// console.log("Aprendiendo ${tecnology}");

// }

// learn("JavaScript");

const learn = (technology) => console.log("Aprendiendo ${tecnology}");

learn("JavaScript");


// ================================================

const months = ['May', 'January', 'July', 'June', 'December', 'November', 'Frebruary'];

const shoppingCart = [
  { productName: 'Smart TV 60"', price: 900 },
  { productName: 'Smart TV 50"', price: 700 },
  { productName: 'Tablet', price: 500 },
  { productName: 'Smart phone', price: 900 },
  { productName: 'Google assistand', price: 600 },
  { productName: 'Sound-bar', price: 400 },
  { productName: 'Sound-bar', price: 900 },
  { productName: 'Play station', price: 800 },
  { productName: 'Wii', price: 450 },
  { productName: 'Mouse', price: 50 },
];

// months.forEach( function(months) {
//     if (months === 'November' || months == 'December'){
//     console.log('Se verifica en el y el mes si existe en el arreglo');
// }else{
//     console.log('El mes no existe');
// }
// });

months.forEach( months => {
     if (months === 'November' || months == 'December'){
     console.log('Se verifica en el y el mes si existe en el arreglo');
 }else{
     console.log('El mes no existe');
 } 
} );

//  === Whith Me feels Rich progaming  ========

// const result = shoppingCart.some(function (product) {
//     return product.price ===800 ;
// }   );

// console.log(result);

// Ahora vercion arrow

const result = shoppingCart.some( product => product.price === 800 );

console.log(result);
// =======================================

// const result3 = shoppingCart.reduce(function(total, product) {
//     return total + product
// }, 0)

// console.log(result3);

// Ahora version arrow

const result3 = shoppingCart.reduce((total, product) => total + product.price, 0);

console.log(result3);

// =======================================

// const result6 = shoppingCart.filter( function(product) {
//     return product.price < 600;
// } );

// console.log(result6);

const result6 = shoppingCart.filter((product) => product.price < 600);

console.log(result6);


// ===============================================


// function greet(userName){
//     console.log('Hello ${userName}');
// }

// console.log(greet("Fabian"))

// Convertir a arrow function

const greet2 = userName => `Hello ${userName}`
console.log(greet2("Fabian Guzman Villegas"));

// ===============================================

// const boost = num => num * num;
// console.log(boost(5));

const boost2 = num => Math.pow(2, num);
console.log(boost2(6));

// ================================

// Arrow function con retorno explícito 

// Se usa cuando el cuerpo de una funcion tiene llaves {}

const add10 = (num4, num5) => {const result7 = num4 + num5;
    return result7;
 }

 console.log(add10(15, 7));

//================================================================
// Retorno implicito, cuando la función no tiene llaves realiza el retorno implicitamente

const add11 = (num6, num7) => num6 + num7;

console.log(add11(4, 6));