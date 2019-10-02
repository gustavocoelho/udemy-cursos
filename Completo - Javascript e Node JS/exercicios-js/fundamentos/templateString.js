const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome

//Template String com interpolação
const template = `
    Olá
    ${nome}!
`
console.log(concatenacao, template)
console.log(`1 + 1 =  ${1 + 1}`)

const up = vl_param => vl_param.toUpperCase()
console.log(`Ei.. ${up('gustavo')}!`)