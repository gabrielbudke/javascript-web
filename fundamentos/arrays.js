/**
 *  Array é um tipo de dados dinâmico,
 *  ele cresce e diminui apartir do momento
 *  que adiciono e excluo.
 * 
 *  Estrutura indexada
 */
const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
// Quando o índice não exsite retorna ''undefined
console.log(valores[4])
// Adicionar valor ao índice [4]
valores[4] = 10
console.log(valores)

// Retorna a quantidade de elementos dentro do array
console.log(valores.length)

/**
 *  É possível misturar vários tipos de elementos 
 *  no array, embora não seja adequado
 *  
 *  método push() adiciona elementos ao array
 */
valores.push({id: 3}, false, null, 'teste')
console.log(valores)

// Remove o ultímo elemento do array e o retorna
console.log(valores.pop())
// Remove o elemento passado no índice
delete valores[0]
console.log(valores)
// Array em JS é um 'objeto'
console.log(typeof valores)