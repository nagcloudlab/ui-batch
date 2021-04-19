

let menuItem = {
    name: 'biryani',
    price: 200
}

let food1 = {
    name: 'food1',
    price: 100
}
let food2 = {
    name: 'food2',
    price: 100
}

// cjs
// module.exports = {
//     menuItem
// }

// or

// esm
export default menuItem;
export {
    food1,
    food2
}