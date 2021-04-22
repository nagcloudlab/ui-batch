
const lodash = require('lodash')
const moment = require('moment')


// let arr1 = [1, 2, 3, 4]
// let arr2 = [3, 5, 6]

// let arr = lodash.difference(arr1, arr2)
// console.log(arr);



let arr1 = [
    { id: 1, name: 'item-1', price: 100 },
    { id: 2, name: 'item-2', price: 200 }
]

let arr2 = [
    { id: 1, name: 'item-1', price: 100 },
    { id: 3, name: 'item-3', price: 300 }
]

let arr = lodash.differenceWith(arr1, arr2, lodash.isEqual)
console.log(arr);


const hour = moment().get('hour')
console.log(hour);


console.log(moment().subtract(7, 'days'));