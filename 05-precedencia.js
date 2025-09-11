//FABIAN GUZMAN VILEGAS Precedencia

// la presedencia sirve para definir en que orden se ejecutan las operaciones aritmeticas,
//  Si queremos tener control sobre el orden en que se ejecutan debemos usar Parentesis.
//Si no usamos el lenguaje usara la "Tabla de Procedencia"

//Ejemplo
let result;

result = 20 + 30 * 2; // Resultado con la presedencia 80
result = 40 / 2 + 30 - 20 * 2; // resultado con presedencia: 10

result = 40 / 2 + (30 - 20) * 2; // resultado con presedencia: 40 

result = 12**2 + 100 / 4 - 10 * 4;

//primero el exponenete: 144 / 12 x 12
//despues 100 /4 es 25 
//despues multiplicacion da: - 40
// 144 + 25 - 40 = 129

console.log(result);




