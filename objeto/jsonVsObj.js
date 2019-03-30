/**
 *  JSON
 *      
 *      É um formato textual de dados.
 *      Não é executável.
 *      É muito usado para se ter imigração de dados 
 *      de uma tecnologia para outra.
 * 
 */
const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }
// Object para JSON
console.log(JSON.stringify(obj))

// Formatos errados do JSON
// console.log(JSON.parse("{ a: 1, b: 2, c: 3 }"))
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }"))

// Formato CORRETO aceito pelo JSON
// JSON para Object
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'))
console.log(JSON.parse('{ "a": 1, "b": "string", "c": true, "d": {}, "e": [] }'))
