// Fabian Guzman Villegas
// More methodes for arrays
const months = new Array('May', 'January', 'July', 'June');

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

// Recorrer el arreglo con un forEach para que muestre todos los elementos
// En este caso months es un parámetro
months.forEach(function (month) {
  console.log(month);
});

// Verificar si un mes existe con forEach
months.forEach(function (month1) {
  if (month1 == 'May') {
    console.log('The month of June exist in the array');
  } else {
    console.log("Doesn't Exist");
  }
});

// Buscar en un arreglo si algo existe, si existe devuelve un true
//  si no un false
const result = months.includes('May');
console.log(result);

// =================================

// En JS inludes No funciona bien con los objetos
const result2 = shoppingCart.includes('Tablet');
console.log(result2);

const num = 5 == 5;
console.log('Igualación doble', num);

const num2 = 5 == '5';
console.log('Igualación doble', num2);

//  Con igualacion triple verifica si es del mismo valor y tipo.
const num3 = 5 === '5';
console.log('Igualación triple', num3);

// ==============================
// En conclusión para un arreglo plano se usa includes y para un arreglo de objetos de usa some.
// const result5 = shoppingCart.some(function(product) {
//     return product.productName === 'Tablet'
// })

// console.log(result5);

// Hace lo mismo que el código anterior pero más corto con Arrow Function
let result5 = shoppingCart.some(
  (product) => product.productName === 'Play station'
);
console.log(result5);
// ============================

// Método reduce
// Sumar todos los precios del carrito de compras
result5 = shoppingCart.reduce(function (total, product) {
  return total + product.price;
}, 0);

console.log(result5);

// Lo mismo pero con función flecha
result5 = shoppingCart.reduce((total, product) => total + product.price, 0);
console.log(result5);

//=============
result5 = shoppingCart.filter(function (product) {
  return product.price < 700;
});
console.log(result5);

// Mayor que 50
result5 = shoppingCart.filter(function (product) {
  return product.price > 50;
});
console.log(result5);

// Version Arrow
result5 = shoppingCart.filter((product) => product.price < 700);
console.log(result5);

result5 = shoppingCart.filter((product) => product.price > 50);
console.log(result5);

// Filtrar los del mismo producto
result5 = shoppingCart.filter(function (product) {
  return product.productName === 'Sound-bar'
});
console.log(result5);

// Version Arrow
result5 = shoppingCart.filter((product) => product.productName === 'Sound-bar')
    console.log(result5);

// Aqui continua los pantallazos
// Todos exepto un tipo
result5 = shoppingCart.filter(function(product){
    return product.productName !== 'Sound-bar'
});

console.log(result5);

// Ahora version Arrow
result5 = shoppingCart.filter((product) => product.productName !== 'Sound-bar');
console.log(result5)