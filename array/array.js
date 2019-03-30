/**
 *  Array:
 *      Estrutura indexavel iniciando em 0.
 *      É dinâmico (cresce e diminui)
 *      
 */

console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // JS retorna 'undefined'

aprovados[3] = 'Paulo'
aprovados.push('Abia') // Forma de adicionar no array
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)

// Altera a ordem do array de forma ordenada
aprovados.sort()
console.log(aprovados)

// deletar determinado item do array
// mas não reordena o array
// apenas determina como undefined
delete aprovados[1]
console.log(aprovados[1]) // retorna 'undefined'
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
/**
 *  splice()
 *      Serve para deletar elementos em/apartir de 
 *      determinado item.
 *      
 *      Mas também serve para adicionar elementos nos
 *      indíces que foram excluídos.
 *     
 */
console.log(aprovados)
aprovados.splice(1, 1)
console.log(aprovados)