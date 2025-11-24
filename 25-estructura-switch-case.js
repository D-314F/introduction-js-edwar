// Estructura switch
//  Permite evaluar una expresión y ejecutar diferentes bloques de código, según el caso que 
// coincida.
const paymentMethod = 'card';

switch (paymentMethod) {
    case 'card':
        console.log('Pagaste con tarjeta');
    break;
case 'bitCoin':
    console.log('Pagaste con Bitcoin');
    break;
case 'creditCard':
    console.log('Pagaste con tarjeta de crédito');

    break;
    case 'debitCard':
        console.log('Pagaste con tarjeta de débito');
        break;
    
    default:
        console.log('Métodos de pago no válido');
        break;
}