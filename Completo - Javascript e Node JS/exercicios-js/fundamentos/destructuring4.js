function rand( [min = 0, max = 1000] ){
    if(min > max) [min, max] = [max, min] //inverter os valores
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)

}

//const obj = [1001, 4]
console.log(rand([50, 40]))
console.log(rand([20]))
console.log(rand([, 52]))
console.log(rand([, 12]))
console.log(rand([]))

