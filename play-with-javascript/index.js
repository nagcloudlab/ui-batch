

let myFunctions = []

//------------------------------------------------

for (let i = 0; i < 2; i++) {
    var myFunc = function () {
        console.log(i)
    }
    myFunctions.push(myFunc)
}

//------------------------------------------------

myFunctions[0]()
myFunctions[1]()

//------------------------------------------------



