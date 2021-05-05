


// ES6  - proxy



const target = {
    message1: "hello",
    message2: "everyone"
};



const handler1 = {
    get: function (target, prop, receiver) {
        if (prop === "message2") {
            return "world";
        }
        return Reflect.get(...arguments);
    }
};

const proxy1 = new Proxy(target, handler1); // ES6

console.log(proxy1.message1)
console.log(proxy1.message2)