// Fabian Guzman Villegas
// Rest operator o spread operator
//  Lo que se busca es NO  NO NO NO NO modificar el arrreglo original.

const months = ['December', 'November', 'March'];
console.table(months);

//  Se crea un nuevo arreglo y lo unimos con otro. 
const newArray = [...months, 'Juanuary'];

//  El nuevo arreglo se puede agregar al final o al inicio 
const newArray2 = ['January', ...months];

console.table(newArray);
console.table(newArray2);

months.push('Hola');
months.unshift('Como estas');
console.table(months)
