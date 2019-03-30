let valor // não inicializada
console.log(valor)

valor = null // ausência de valor
console.log(valor)
// Ter cuidado quando a variavel está com 'null'
// console.log(valor.toString()) // erro

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco // forma de excluir algo
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)
