//Novo recurso ES2015

const pessoa = {
    nome: 'Gustavo',
    idade: 38,
    endereco: {
        logradouro: 'Rua anastácea',
        numero: 55
    }
}

const { nome, idade } = pessoa //Retira do objeto pessoa os atributos definidos nas constantes nome e idade
console.log(nome, idade)


const { nome: n , idade: i } = pessoa 
console.log(n, i)

const { sobreNome, bemHumorada = true } = pessoa 
console.log(sobreNome, bemHumorada)

const { endereco: {logradouro, numero} } = pessoa
console.log(logradouro, numero)

