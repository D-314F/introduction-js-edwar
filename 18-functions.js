//Fabian Guzman Villegas
// Funciones in JS 
//  ¿Que es Hoisting?
// Hoisting en JS es el comportamiento por defecto en el que el interprete "MUEVE" las declaraciones (De variables y funciones) A la parte superior de su ámbito (scope) antes de que ejecutar el codigo.
// Esto significa que puedes usar una función o varible declarada antes de escribirla en el codigo. 
// Declaraciones : Cuando yo digo let userName = "fabian";

// Declaración de una función 
//  Como esta función está declarada se puede llamar antes o después de su creación.

add();

function add (){ 
    console.log(10 + 10);
};

//===============================

// La expresión de una función 
// La expresión de la funcion solo puede llamarse después de su creación 

const sumar2 = function(){
    console.log(3 + 3);
};
sumar2(); //Argumentos

// ==================
//  IIFE (Immediately Invoked Function Expression), esta función se llama asi misma. 
// Son útiles para proteger las variables para que no se mezclen con las variables de otros archivos. 
(function(){
    console.log("Esta es una función IIFE")
})(); // Se (auto) llama a si misma, se ejecuta de una
// Antes de 2015 de usaba esto.
(function(name){
    console.log(`Hello: ${name}`);
})('Fabian'); 


console.log(client);
