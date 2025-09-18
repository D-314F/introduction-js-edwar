//Fabian Guzman Villegas
// Cuando se unen dos obhetos lo idel es No modificar ninguno de los dos objetos

const product = {
  productName: 'Sensor de humedad',
  price: 300,
  available: true,
};

Object.freeze(product);
// Objeto que alcamacena medidas
const measurements = {
  weighs: '1 kg',
  measurement: '10 cm',
};

//  Rest operator, consta de (...) {tres puntos}

const newProduct = { ...product, ...measurements };
console.log(product);
console.log(newProduct);

// Fabian Guzman Villegas
// Aqui nosotros creamos nuestro propio objeto

const toyCar = {
  size: '15 cm',
  weight: '300 g',
  mark: 'hotwells',
  model: 'Mazda CX-5',
};

const gun = {
  size: '40 cm',
  weight: '40 kg',
  model: 'AK-47',
};

const newGun = { ...toyCar, ...gun };
console.log(toyCar);
console.log(newGun);
