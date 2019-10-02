//função sem retorno

function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) //considera o segungo parâmetro como undefined - O resultado é NaN
imprimirSoma()
imprimirSoma(2, 4, 5, 3, 2, 7) //soma apenas os 2 primeiros


//Função com retorno
function soma(a ,b){
    return a + b
}

console.log(soma(2, 7))
