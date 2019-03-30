/**
 *  O objeto pessoa aponta para um 
 *  endereço em memória, lá no endereço é que se 
 *  tem o objeto.
 *  
 */

 // pessoa -> 123 -> {...}
const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 > {...}
// pessoa = { nome: 'Ana' }

/* -> Object.freeze()
        Método que congela o objeto.
        
        Uma vez que o objeto é congelado, 
        ele não pode mais ser mexido.

        Não é possivel inserir, alterar e 
        deletar atributos.
*/
Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

// Objeto com freeze() desde o início
const pessoaConstante = Object.freeze({nome: 'João'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)

