// alert("Estoy en hello world");
// Convenciones para nombrar variables

// CamelCase
// UpperCamelCase => se usa para nombrar las clases en javascript
// lowerCamelCase => se usa para nombrar variables y funciones en javascript
// SCREAMING_SNAKE_CASE => se usa para nombrar las variables pero constantes en javascript (osea que va ser siempre el mismo valor)
// kebab-case => generalmente usado para nombrar archivos multimedia y carpetas en javascript

// snake_case => generalmente usado para nombrar varibales en el lenguaje python (osea no se usa en javascript)

// Train-Case => desconoce el uso (variante del kebab-case pero con mayusculas en cada palabra)

// ya NO se usa var para declarar las variables, actualmente se usa let y const
// en JS no es obligatorio indicar el tipo variable (string, int, boolean, etc) ya que JS lo detecta automaticamente
// JS se puede oh no usar el punto y coma (;) al final de cada linea de codigo (sentencia).

var producto = 'sensor-1';
var producto2 = 'sensor-2';

console.log(producto);
console.log(producto2);

// no se puede iniciar una variable con un guion medio (-)
// var -sensor = "sensor-3";

// no se puede iniciar una variable con un numero
// var 1sensor = "sensor-4";

// si se puede iniciar con un guión bajo (_)
var _sensor = 'sensor-5';
console.log(_sensor);

// crear una variable de las tres formas distintas

// var sensor10 = 'Sensor de lluvia';
// const sensor10 = 'Sensor de lluvia';
let sensor10 = 'Sensor de lluvia';

console.log(sensor10);

// Ejemplo con var
// no me indica error por duplicar la variable
// var sensor11 = 'sensor de humedad';
// var sensor11 = 'sensor de calor';

// console.log(sensor11);

// let no permite duplicar la variable o al declarar variables
// let sensor12 = "sensor de velocidad";
// let sensor12 = "sensor de luz";

// no muestra error por falta de inicializacion
// console.log(userName);
// var userName = 'Fabián';

// let si muestra error por falta de inicializacion
// console.log(userName);
// let userName = 'Fabián';

// usando la declaracion const No se puede cambiar el valor de la variable
const maxSize = 1024;
maxSize = 2048; 
console.log(maxSize);
