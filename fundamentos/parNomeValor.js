/**
 *  Contexto Léxico:
 *      local aonde sua váriavel 
 *      foi definida no seu código
 */

// par   nome  / valor
const saudacao = 'Opa' //context léxico 1
 
function exec(){
    const saudacao = 'Falaa' // context léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 98,
    endereco:{
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)