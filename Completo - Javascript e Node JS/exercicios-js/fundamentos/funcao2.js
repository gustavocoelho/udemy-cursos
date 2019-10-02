//Armazenando uma função em uma variável
const imprimirSoma = function(a, b){
    return a + b
}

imprimirSoma(1, 7)
console.log(imprimirSoma(2, 3))

const soma = (a, b) =>{
    return a + b
}
console.log(soma(6, 7))

const subtracao = (a, b) => a - b //Arrow function
console.log(subtracao(2, 3))

const imprimir = a => console.log(a) //Arrow function
imprimir('Legal')