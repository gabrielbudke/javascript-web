/**
 *  ==  -> Igual, análisa apenas se valores coincidem
 *  === -> Extritamente igual, análisa se 
 *         valores e tipos coincidem
 */

//  Verifica se são iguais
console.log('01)', '1' == 1)

//  Verifica se são extritamente iguais.
//  E Nessa caso o JS retorna false pois 
//  ele análise o tipo (string, number, boolean, ...)
console.log('02)', '1' === 1)

//  Verifica se são diferentes
console.log('03)', '3' != 3)
console.log('04)', '3' !== 3)

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

//  Criando data em JS
const d1 = new Date(0)
const d2 = new Date(0)

//  Está comparando a referência de memória
console.log('09)', d1 === d2) 
console.log('10)', d1 == d2)
//  Está verificando o valor retornado pelo getTime()
console.log('11)', d1.getTime() == d2.getTime())

//  Está comparando undefined e null
console.log('12)', undefined == null)
console.log('13)', undefined === null)
