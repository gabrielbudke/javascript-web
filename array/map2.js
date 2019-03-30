const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

//Retornar um array com os precos
const paraObjeto = json => JSON.parse(json)
const apenasObjeto = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasObjeto);
console.log(resultado)







// ***  DESAFIO  *****
// Retornar um array apenas com os preços
let preco = carrinho.map(e => 
    parseFloat(JSON.parse(e).preco).toFixed(2).replace('.', ',')
);

console.log(preco);

