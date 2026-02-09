// El objeto literal
// Esta es la forma mas comun, pero no es muy dinamico que digamos
// de esta forma el objeto tiene diferentes variables

 const product = {
    productName : "mouse",
    productPrice : 50000,
    productColor : "red"
 }

//  Asi se crea un segundo objeto con el objeto liteal
 const product2 = {
    productName : "key board",
    productPrice : 80000,
    productColor : "blue"
 }

//  ====================================

// Objeto constructor
// Este objeto constructor debe de tener todos los valores que van a formar parte del objeto 
// en los parentesis de la función llegan los parametros

function Product(productName, productPrice, productColor) {
   this.productName = productName;
   this.productPrice = productPrice;
   this.productColor = productColor;
}


const product3 = new Product ("mouse", 3500, "Green");
const product4 = new Product ("Cell phone", 3500, "Black");
const product5 = new Product ("Pc", 3500, "White");


console.log(product3);
console.log(product4);
console.log(product5);