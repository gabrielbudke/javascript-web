const escola = "Cod3r"

console.log(escola.charAt(4)) //retorna caracter no indice 4
console.log(escola.charAt(5)) // retorna vazio
console.log(escola.charCodeAt(3)) // retorna o valor unicode correspondente ao indice
console.log(escola.indexOf('3')) // retorna o indice correspondente ao caracter

console.log(escola.substring(1)) // seleciona string do indice 1 até o final
console.log(escola.substring(0, 3)) // seleciona a string do indice 0 ate o indice 2

console.log('Escola '.concat(escola).concat("!")) //concatena
console.log("Escola " + escola + "!") // concatena
console.log(escola.replace(3, 'e')) //troca o caracter no indice 3 pela letra 'e'

console.log('Ana,Maria,Pedro'.split(',')) // retorna um array
