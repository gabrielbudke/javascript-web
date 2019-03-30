/**
 *  Factory é uma função que sempre retorna
 *  um objeto.
 * 
 *  Cria uma instancia de pessoas cada vez 
 *  que é chamada, sem precisar criar cada objeto.
 */

// Factory simples
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())