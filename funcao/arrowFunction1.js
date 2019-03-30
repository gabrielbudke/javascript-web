/**
 *  Função Arrow
 * 
 *  Objetivo: 
 *      Sintaxe reduzida
 *      Return implicito
 * 
 */

let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

// Função Arrow com return implícito
dobro = a => 2 * a
console.log(dobro(Math.PI))

//  Função com parametro vazio
let ola = function() {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // possui um param mas JS permite passar vazio
console.log(ola())
