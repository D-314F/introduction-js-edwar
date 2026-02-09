// Fabian Guzman Villegas 
// for each y el map son metodos exclusivos de arreglos 

const shoppingCart = [
  { productName: 'Smart TV 60"', price: 900, color: 'red' },
  { productName: 'Smart TV 50"', price: 700, color: "blue" },
  { productName: 'Tablet', price: 500, color: "green" },
  { productName: 'Smart phone', price: 900, color: "orange" },
  { productName: 'Google assistand', price: 600, color:"purple" },
  { productName: 'Sound-bar', price: 400, color:"white" },
  { productName: 'Sound-bar', price: 900, color: "pink" },
  { productName: 'Play station', price: 800, color:"yellow" },
  { productName: 'Wii', price: 450, color:"black" },
  { productName: 'Mouse', price: 50, color:"brown" },
];

// Recorrer el arreglo por cada elemento

// shoppingCart.forEach(function(product){
//  console.log(product);
// });

// // Acceder a un elemento especifico
// shoppingCart.forEach(function(product){
//  console.log(product.price);
// }); 

// // Acceder a un elemento especifico

// shoppingCart.forEach(function(product){
//  console.log(product.productName);
// });

// // Acceder a un elemento especifico

// shoppingCart.forEach(function(product){
//  console.log(product.color);
// });

// ===========================================
// ahora forEach con arrow function

// recorrer un arreglo por cada elemento
shoppingCart.forEach((product) => console.log(product));

// acceder a un elemento especifico

shoppingCart.forEach((product) => console.log(product.price));

// acceder a un elemento especifico
shoppingCart.forEach((product) => console.log (product.productName));

// acceder a un elemento especifico
shoppingCart.forEach((product) => console.log(product.color));    

// ===========================

// Recorer un arreglo por cada elemento 
//shoppingCart.forEach((product) => console.log(product));

const array = shoppingCart.map ( product => `El nombre del producto es ${product.productName} - ${product.price}`)

console.log(array);