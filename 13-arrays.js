//Fabian Guzman Villegas
// Arrays en JS
const numbers = [10, 20, 30, 100];
console.log(numbers);

// Otra forma de visualización en tabla
console.table(numbers);

// Crear un arreglo con el constructor
const months = new Array('May', 'January', 'July');
console.table(months);

const myArray = [
  'Hello',
  42,
  true,
  false,
  null,
  { myName: 'Fabian', myJob: 'Student' },
  [3172293, 3178662186, 1089100150],
];
console.log(myArray);

//consultar un elemento de un arreglo
console.log(typeof numbers[2]);
console.log(myArray[5]);

// Metodo para conocer la longitud de un arrreglo
console.log('Fabian tu arreglo tiene: ' + numbers.length + 'elementos');

// Un iterador con forEach
const numbers2 = [10, 20, 30, 80, 100, 7, 8];
numbers2.forEach(function (numbers) {
  console.log(numbers);
});

months.forEach(function(month){
  console.log(month);
});
myArray.forEach(function(element) {
  console.log(element);
});
