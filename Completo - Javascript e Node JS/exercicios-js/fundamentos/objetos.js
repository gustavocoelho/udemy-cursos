const prod1 = {} 
console.log(prod1)

prod1.nome = 'Celular Ultra Mega' //Atributos chave e valor
console.log(prod1)
prod1.preco = 4998.90  //Atributos Chave e valor
console.log(prod1)
prod1['Desconto Legal'] = 0.40 //Outra forma de instanciar com chave e valor. Evitar atributos com espaço
console.log(prod1)

const prod2 = {
    nome: 'Gustavo',
    preco: 79.90,
    obj: {
        exercicio: 1,
        nota: 10
    }
}
console.log(prod2)

//Ex: JSon [Javascript Object Notation]: '{ "rg": "587756399", "cpf": "58435789624" }' //É um formato textual de um objeto
