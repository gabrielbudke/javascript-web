/**
 * Objetos - JS
 * 
 *  -> objeto é representado por um par de chaves {}
 *  -> é possivel criar um bojeto e definir 
 *     as suas funçoes dinamicamentes
 *  -> é uma coleçao de 'chave' e 'valor'
 * 
 */

 // Cria um objeto vazio de forma literal
const prod1 = {}
// Atribui chave e  valor ao objeto de forma dinâmica
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.48 // evitar atributos com espaço

console.log(prod1)

// Outra forma de atribuir valores ao objeto
const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
}

console.log(prod2)