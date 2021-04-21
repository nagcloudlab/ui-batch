
/*

    OOP using Typescript

    e.g

       car
        .move()

       wheel()
        .rotate()

*/


//-------------------------------------
// dependency
//-------------------------------------
// Abstraction / Interface
interface Wheel {
    rotate: () => number
}

// Encapsulated / Implementation
class MRFWheel implements Wheel {
    constructor() {
        console.log("MRFWheel instance created...");
    }
    rotate() {
        console.log("MRF-wheel rotating...");
        return 1000;
    }
}

class CEATWheel implements Wheel {
    constructor() {
        console.log("CEATWheel instance created...");
    }
    rotate() {
        console.log("CEAT-wheel rotating...");
        return 2000;
    }
}


//-------------------------------------
// dependent
//-------------------------------------

class Car {


    constructor(private wheel: Wheel) {
        console.log("Car instance created..");
    }
    // DI
    setWheel(wheel: Wheel) {
        this.wheel = wheel;
    }
    move() {
        this.wheel.rotate()
        console.log("Car moving")
    }
}

// design & perfornamnce issues
///-------------------------------

/*

    ==> dependent & dependency instances are tightly-coupled
        --> can't extend with new features easily
    ==> too many duplicate dependency instances created & destroyed..
        --> resource use high , slow ,..
    ==> unit-testing not possible
        --> dev, buf-fix slow


    why these issues are raising in car module?
    

        ==>  dependent creating it's ow dependency

    solution :
    
        ==> don't create dependency in dependent's home i.e class , get from factory  ( Factory design pattern )


    limitation of factory lookup:
    
        ==> factory location tight-coupling
        
    
    best solution :

        ==> don't create & lookup for dependency , inject by third-party ( Inversion of Control - IOC  )

                dependency injection ( DI )

    OO principles

        S - Single-responsiblity Principle
        O - Open-closed Principle
        L - Liskov Substitution Principle
        I - Interface Segregation Principle
        D - Dependency Inversion Principle


*/


//-------------------------------------
// Test Drive
//-------------------------------------

const car: Car = new Car(new MRFWheel());
console.log();
car.move();
console.log();
car.move();

car.setWheel(new CEATWheel())
console.log();
car.move();
console.log();
car.move();