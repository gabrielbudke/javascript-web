const filhas = ['Valeska', 'Cibalena']
const filhos = ['Uoxiton', 'Uesclei']
// 'concat' faz a concatenação de array sem alterar
// arrays originais
const todos = filhas.concat(filhos, 'Fulano')
console.log(todos, filhas, filhos)

console.log([].concat([1, 2], [3, 4], [[6, 7]]))
