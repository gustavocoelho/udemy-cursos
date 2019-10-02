//par nome/valor
const saudacao = 'Opa' //contexto léxico 1

function exec(){
    const saudacao = 'Faaaallaaaa' //contexto léxico 2
    return saudacao
} 

//Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 22,
    peso: 30,
    endereco: {
        logradouro: 'Rua abc',
        numero: 12
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)