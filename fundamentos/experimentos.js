/**
 *  Quando se cria uma váriavel do tipo 'let'
 *  ela fica local no Node
 */
let a = 3

global.b = 123
this.c = 456
this.d = false
this.e = 'teste'

console.log(a)
console.log(global.b)


/**
 *     Dentro do node cada arquivo representa 
 *     um módulo 
 */
//     'this' é igual à 'module.exports'
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this) // Retorna true
console.log(module.exports) // Retorna um objeto

// module.exports = { e: 456, f: false, g: 'teste'}

//  Criando uma variavel maluca: sem var e let
//  Ela fica global no Node
abc = 3 // NÃO FAÇA ISSO EM CASA !!
console.log(global.abc)