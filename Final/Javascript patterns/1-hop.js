

/*

 design issues

    => code tangling / tight-coupling
    => code scattering / duplication

    solution:
        => we must isolate cross-cutting concerns from regular functions,

     How ?
        => using Higher-Order-Function

*/

function hi() {
    console.log('Hi');
}

function hello() {
    console.log("Hello");
}

function withSunFlower(f) {
    return function () {
        console.log("🌻🌻🌻🌻🌻🌻🌻🌻🌻🌻🌻🌻🌻");
        f()
        console.log("🌻🌻🌻🌻🌻🌻🌻🌻🌻🌻🌻🌻🌻");
    }
}


// hi();
withSunFlower(hi)()