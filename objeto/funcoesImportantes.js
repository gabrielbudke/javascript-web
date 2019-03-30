const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}
// Pega array com as chaves do objeto
console.log(Object.keys(pessoa))

// Pega um array com os valores do objeto
console.log(Object.values(pessoa))

// Pegar um array de duas posições com as 
// chaves e valores -> Ex: [ 'nome', 'Rebeca' ]
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
});

//  Definir propriedades 
//  (possibilidade de setar parâmetros de uma propriedade) 
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // Permite ou ñ ser listada
    writable: false, // Permite ou ñ ser editada
    value: '01/01/2019' // valor
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
// Concatena objetos
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2, /* ... */)
console.log(obj)

Object.freeze(obj)
obj.c = 1234
console.log(obj)