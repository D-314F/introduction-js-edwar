//Fabian Guzman Villegas
// Desustructuracion de objetos 

const product = {
    productName: "Sensor de humedad",
    price: 300,
    available: true,
}

//Fabian Guzman Villegas
//Aqui un ejemplo de desestructuracion de objetos
const productPrice = product.price;
// const productName = product.productName;


console.log(productPrice);
console.log(product.productName);

//Fabian Guzman Villegas
//Para que sirve el Destructuring? Sirve para extraer los valores de un objeto

const {price, available, productName} = product;

console.log(price, available, productName);
