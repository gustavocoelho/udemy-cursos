//o var permite o içamento (hoisting)
console.log('a = ' + a) //compila sem problemas mas a fica como undefined
var a = 2 

console.log('a = ' + a)

console.log('b = ' + b) //erro de pré compilação

let b = 2 

console.log('b = ' + b)
