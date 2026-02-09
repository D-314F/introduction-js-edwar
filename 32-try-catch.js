// Try catch
// Es una estructura para manejar errores entiempo de ejecucion, permitiendo que el programa continue ejecutandose sin fallar completamente.
// try:dentro de este bloque que puede generar un error.
// Catch, captura el error si ocurre dentro de try y permite manejarlo.

const num1= 20;
const num3= 30;

console.log(num1)

try {
    console.log(num2)
} catch (error) {
    console.log("Error la variable no existe")
}

console.log(num3)


// =========================
// Ejercicio2

try {
    console.log(x)
} catch (error) {
    console.log("ocurrio un error", error.message)
}



// ===================================================
// throw: lanza manualmente un error
// JS manda un error y detiene inmediatamente la ejecución dentro del bloque try. 
function divide(num5, num6) {
    try {
        if (num6 === 0) throw "no se puede dividir entre cero" 
            return num5/num6
        
    } catch (error) {
        return "Error", error;
    }
}

console.log (divide(10,5))
console.log (divide(10,0))