/**
 *  Função Construturo:
 *      Esta relacionado com o 
 *      paradigma OO (Orientação Objeto).
 *  
 */


function Carro (velocidadeMaxima = 200, delta = 5) {
    
    
    /**
     *  Para criar um atributo privado em 
     *  JS é só atribuir a 'let' ou 'const'
     */
    
    // atributo privado
    let velocidadeAtual = 0

    // metodo publico
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    /**
     *  Para tornar um atributo publico 
     *  é só usar o 'this'
     */

    // metodo publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log('Uno', uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar() 
console.log('Ferrari', ferrari.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)

