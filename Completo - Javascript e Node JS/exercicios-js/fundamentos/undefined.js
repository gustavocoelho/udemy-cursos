let valor
console.log(valor) //undefined, não foi atriuída
//console.log(valor2) //Is not defined, não roda
valor = null
console.log(valor) //Auxência de valor
//console.log(valor.toString()) //Erro de propriedade nula
const produto = {}
console.log(produto.preco) //undefined
produto.preco = 3.5
console.log(produto.preco)
produto.preco = undefined
console.log(produto.preco)
console.log(produto)
delete produto.preco
console.log(produto)