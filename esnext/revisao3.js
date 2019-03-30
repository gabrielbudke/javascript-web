// ES8: Object.values/Object.entries
// Object.values: pega os valores de um objeto
// Object.entries: pega chaves e valores. Retorna uma matriz com as chaves e valores dentro de arrays.

const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj))
console.log(Object.entries(obj))

// Melhorias na notação literal
const nome = 'Carla'
const pessoa = {
    nome,
    ola() {
        return 'Oi gente!'
    }
}
console.log(pessoa.nome, pessoa.ola())

// Class
class Animal {}
class Cachorro extends Animal {
    falar() {
        return 'Au Au'
    }
}

console.log(new Cachorro().falar())