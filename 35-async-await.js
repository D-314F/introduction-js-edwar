// Async await

// Async await son caracteristicas de javascript que facilitan trabajar con funciones asincronas, 
// permitiendo escribir codigo que se parece más al sincrono

/* Antes del 2015 se usaba .then() y catch(), pero ahora se usa async y await que internamente siguen siendo promesas.

async : se declara una funcion asincrona, que siempre devuelve una promesa 

await: pausa la ejecucion de la funcion async hasta que una promesa se resuelve o rechaza, devolviendo como resultado una promesa
*/

// ========================================================================

// Ejemplo con una funcion que se cumple

function downloadNewClients(){

    return new Promise(resolve => {
        console.log("Descargando clientes... espere porfavor.")

            setTimeout(()=> {
            resolve("Los clientes fueron descargados...")
        }, 8000);     
    })
};

// async function app() {
//     try{
//         const result = await downloadNewClients();

// Código bloqueado hasta que se resuelva la promesa
//         console.log("codigo que SI se bloquea");
//         console.log(result);
//     }
//     catch (error) {
//         console.log(error);
//     }
    
// }

// app();
// console.log("Código que No se bloquea")



// FUNCION PARA DESCARGAR ULTIMOS PEDIDOS

function downloadLastOrders(){

    return new Promise(resolve => {
        console.log("Descargando ultimos pedidos... espere porfavor.")

            setTimeout(()=> {
            resolve("Las ordenes fueron descargadas...")
        }, 6000);     
    })
};

async function app() {
    try{
        // const clients = await downloadNewClients();
        // const lastOrders = await downloadLastOrders();

        // Código bloqueado hasta que se resuelva la promesa
        // console.log("codigo que SI se bloquea");
        // console.log(clients);
        // console.log(lastOrders);

        // Ahora se va a intentar una forma más eficiente sin que dependa una de la otra

        const result = await Promise.all([downloadNewClients(), downloadLastOrders()])
        console.log(result[0]);
        console.log(result[1]);

    }catch (error) {
        console.log(error);
    }
    
}

app()
console.log("codigo que no se bloquea")