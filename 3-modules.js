//COMMONJS- every file is module(by default)
// Modules- Encapsulated Code(only share minimum)

const names=require('./4-names');
const sayHi=require('./5-utils');
const data=require('./6-alternative-flavor');
require('./7-mind-grenate')

sayHi('Navin')
sayHi(names.john)
sayHi(names.peter)