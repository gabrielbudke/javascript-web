function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

/**
 *  O que acontece quando você usa o operador 'new'?
 * 
 *     Quando se tem uma função construtora e usa o
 *     operador 'new',  não só o fato de ter criado
 *     um novo objeto, mas o prototipo aponta
 *     para a funcao 
 */
const aula1 = new Aula('Bem Vindo', 123)
const aula2 = new Aula('Até Breve', 456)
console.log(aula1, aula2) 

//simulando o new
function novo(f, ...params) {
    const obj = {} // Cria um objeto por notação literal
    // Altera de Object.prototype para Aula.prototype
    obj.__proto__ = f.prototype 
   
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'Bem Vindo', 123)
const aula4 = novo(Aula, 'Até breve', 123)
console.log(aula3, aula4)


