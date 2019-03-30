const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem usar callback
const notasBaixas1 = []
for (let i in notas) {
    if(notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

//----------------------------------------
/**
 *  filter():
 *      Função que filtra elementos de um array
 *      em cima de determinado critério.
 * 
 *      Retorna valores 'true' e 'false' de
 *      acordo com callback.
 *      
 *      Para cada elemento, ela vai chamar 
 *      essa função. Se retornar 'true' ela
 *      armazena no array.
 *        
 * */

// Usando callback
const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
}) 

console.log(notasBaixas2)

// Callback
const notasbaixas3 = notas.filter( nota => nota < 7)
console.log(notasbaixas3)