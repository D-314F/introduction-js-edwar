// Ejercicio con la clase carro vamos a heredar dos carros de tipos distintos

class fullCar {
    constructor(brand, color, model, id, airConditioned = ``, sunroof = ``) {
        this.brand = brand;
        this.color = color;
        this.model = model;
        this.id = id;
        this.airConditioned = airConditioned;
        this.sunroof = sunroof;
    }

    run(){
        return `el vehiculo ${this.brand} esta arrancando y ¿este carro tiene aire acondicionado? ${this.airConditioned}`
    }
};

const car1 = new fullCar ("kia", "gray", "EV9", 1234, true, false)
   console.log(car1.run())



const car2 = new fullCar ("ford", "pink", "fiesta", 100009, true, true)
console.log(car2.run())

class MiddleCar extends fullCar{
    constructor(brand, color, model, id, airConditioned){
    super(brand, color, model, id, airConditioned, ``)
    
    }
     runMiddlecar(){
        return`${super.run()}`
     }

};

const car3 = new MiddleCar("hyundai", "white", "t10", 4567, false)
console.log(car3.runMiddlecar())