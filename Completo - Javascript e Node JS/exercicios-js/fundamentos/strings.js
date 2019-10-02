const escola = "Cod3r"
console.log(escola.charAt(4))
console.log(escola.charAt(5)) //Não causa erro, mas tb não apresenta nada
console.log(escola.charCodeAt(3)) //Valor Unicode na tabela ASC
console.log(escola.indexOf(3))
console.log(escola.substring(1,5))
console.log(escola.substring(1))//A partir do indice informado até o final
console.log(escola.substring(0,3))
console.log('Escola '.concat(escola).concat('!'))
console.log('Escola ' + escola + '!')
console.log(escola.replace(3, 'e'))
console.log(escola.replace(/\d/, 'e'))//Substitui todos os dígitos
console.log(escola.replace(/\w/g, 'e'))//Substitui todas as letras
console.log('Ana, Maria, Pedro'.split(','))



