
require('./styles/style1.css')
require('./styles/style2.css')


const jktGreeting = require('jkt-greeting')
const M = require('minimatch')
jktGreeting.greet('english')

//-------------------------------------------------------


// const menu = require('./hotel/menu')
// console.log(menu.menuItem)

// -or

// import * as menu from './hotel/menu'
// console.log(menu.menuItem)


// or

// import { menuItem } from './hotel/menu';
// console.log(menuItem);

// or

import food, { food1, food2 } from './hotel/menu';
console.log(food);
console.log(food1);
console.log(food2);