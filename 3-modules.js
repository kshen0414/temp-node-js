// every file in node is a module
// CommonJS, every file is module (by default)
// Modules - encapsulated code (only share medium)

const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')


require('./7-mind-grenade')

console.log(data);

console.log(names);



sayHi('susan')
// sayHi(john)
// sayHi(peter)

// since we are returning an object, use the . syntax
sayHi(names.john)
sayHi(names.peter)



// JavaScript object breakdown
// {
//     items : ['item1','item2'],     // a property holding an array
//     singlePerson: {name: 'bob'}
// }