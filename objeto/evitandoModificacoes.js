/**
 *  Object.preventeExtensions
 * 
 *      Ele vai previnir e não vai permitir 
 *      que seu objeto seja extendido.
 *      
 *      Não vai ser possível adicionar novos
 *      atributos. Pode ser excluído.
 * 
 *      Ele permite o objeto ser alterado,
 *      mas não que novos atributos sejam
 *      adicionados.
 */

const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
});

console.log('Extensível:', Object.isExtensible(produto));
produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

/**
 *  Object.seal
 *    
 *      Não é possível adicionar atributos nem
 *      excluir atributos.
 *      
 *      Mas é possível alterar os atributos existentes.
 *      
 */

const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selados:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

/**
 *  Object.freeze
 * 
 *      Não é possível adicionar, alterar e
 *      excluir os atributos.
 */

 