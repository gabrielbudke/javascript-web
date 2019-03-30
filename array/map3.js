/**
 * Construindo a função map2 
 * que não existe no prototype
 */

Array.prototype.map2 = function(callback) {
   const newArray = []
   for(let i = 0; i < this.length; i++) {
       newArray.push(callback(this[i], i, this))
   }
   return newArray
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

//Retornar um array com os precos
const paraObjeto = json => JSON.parse(json)
const apenasObjeto = produto => produto.preco

const resultado = carrinho.map2(paraObjeto).map2(apenasObjeto);
console.log(resultado)


