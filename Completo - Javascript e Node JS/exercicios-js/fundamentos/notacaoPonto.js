console.log(typeof console) //object

console.log(Math.ceil(6,1))

const obj1 = {}
obj1.nome = 'Gustavo' //mais utilizada
obj1['nome'] = 'Fabiane' //Sobrescreve o valor de nome definido anteriormente

console.log(obj1)

function Obj(nome){
    this.nome = nome
    this.exec = function(){
        console.log('Imromir exec')
    }
}

const obj2 = new Obj('cadeira')
const obj3 = new Obj('mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()