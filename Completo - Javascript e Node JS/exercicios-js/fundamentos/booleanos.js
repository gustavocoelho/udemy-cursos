let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(isAtivo)
console.log(!isAtivo)
console.log(!!isAtivo)
console.log(!true)
console.log(!!true)
console.log(!false)
console.log(!!false)

console.log('...os verdadeiros')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo=true))

console.log('...os falsos')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!undefined)
console.log(!!(isAtivo=false))

console.log('...para finalizar')
console.log(!!0 || !!'' || !!null || !!(isAtivo=true))

//Validação
let nome = ''
console.log(nome || 'Desconhecido')

nome = 'Gustavo'
console.log(nome || 'Desconhecido')

