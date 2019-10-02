function rand({min = 10, max = 100 }){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = {min: 20, max: 50}
console.log(rand(obj))

console.log(rand({}))