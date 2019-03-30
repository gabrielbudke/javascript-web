/**
 *  Call & Apply
 * 
 *      Duas formas diferentes 
 *      de se executar uma função em JS.
 * 
 *      A diferença entre Call e Apply é
 *      a forma como os parâmetros são passados.
 */

function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

/* -> Usando Call
        Quando chama a função Call, passo diretamento 
        nos parametros, cada um dos parametros que 
        serão passados para a função. 
        
        Primeiro passa o contexto.
        Depois todos os outros demais parametros */

const carro = { preco: 49990, desc: 0.20 }
console.log(getPreco.call(carro))
console.log(getPreco.call(carro, 0.17, '$'))

//_______________________________________________________
/* -> Usando Apply
        No lugar de colocar todos os parâmetros, 
        diretamente, você passa os parâmetros 
        dentro de um array.
*/
console.log(getPreco.apply(carro))
console.log(getPreco.apply(global, [0.17, '$']))