//Fabian Guzman Villegas
// Metodos Objetos 
//Con esta linea de código garantizo buenas prácticas 
"use strict"

const product = {
    productName: "Sensor de humedad",
    price: 300,
    available: true,
}

const speedMax = 80;
// speedMax = 70;
console.log(speedMax);

//Fabian Guzman Villegas
//Aunque el objeto product este declarado como constante permite agregar propiedades. 
product.quantity = 10;
console.log(product);

//Fabian Guzman
// Con el metodo o funcion freeze bloqueamos el objeto para que no se puedan agregar mas propiedades o eliminarlas o modificarlas (editarlas)
// Object.freeze(product);

//Si usamos el metodo seal no podemos agregar ni eliminar pero si sepuede editar o modficar una propiedad.
Object.seal(product);

//Fabian Guzman Villegas
//vamos a agregar una nueva propiedad color
// product.color = "blue";

// Forma de saber si un objeto está bloqueado 
console.log("El documento esta bloqueado?: " + Object.isFrozen(product));

let response;
if (Object.isFrozen(product)){
     response = "SI";
}else { 
    response= "NO";
}

console.log("El objeto esta bloqueado?: " + response);

//Fabian Guzman Villegas
//Eliminar una propiedad de un objeto 
// delete product.price;
// console.log(product);

//Fabian Guzman Villegas
//Modificar o editar las porpiedades de un objeto 
product.productName = "Sensor de PH";
console.log(product);

//Saber si un objeto está sellado 
console.log("El documento esta sellado?: " + Object.isSealed(product));