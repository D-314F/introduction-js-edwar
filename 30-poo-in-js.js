// POO programación orientada a objetos
// Una claseen JS es una plantilla para crear objetos, que comparten mismas propiedades y métodos
// una clase es como un molde que describe como seran los objetos y que podran hacer

class product {
    constructor(productName, productPrice){
    this.productName = productName
    this.productPrice = productPrice
}

  formatProduct(){
    return `El producto ${this.productName} tiene un precio de ${this.productPrice}`
  }

};

const product1 = new product ("remote control", 15000)
const product2 = new product ("SSD", 220000)

console.log(product1.formatProduct())
console.log(product2.formatProduct())


// =================================
// Herencia en JS
// La herencia en JS permite que los objetos reutilicen propiedades y metodos de otros


class book extends product {
    constructor(bookName, bookPrice, isbn) {
        super(bookName, bookPrice)
        this.isbn = isbn;
    }

formatProduct1(){
    return `${super.formatProduct()} y su ISBN es ${this.isbn}`
}
}

const book1 = new book ("el perfume", 20000, 13579)
// console.log(book1)
// console.log(book1.formatProduct)    
book1.formatProduct();

console.log(book1.formatProduct1())    