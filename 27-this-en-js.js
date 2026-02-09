// This es una palabra reservada del sistema, o sea que 
// No se puede crear ni funciones ni variables con este nombre

const reservation = { 
    userName: "Fabian",
    lastName: "Guzman",
    userAge: "17",
    total: 10000,
    isPayed: false, 

// Los objetos pueden contener funciones 
    information: function () {
        console.log(`El cliente ${this.userName} reservò y la cantidad a pagar es ${this.total}, hasta el momento el estado del pago es ${this.isPay}`)
    }
};

reservation.information();