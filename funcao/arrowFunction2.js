/**
 *  O this na função arrow é fixo, 
 *  baseado no contexto no qual a 
 *  função foi escrita e não é influenciado
 *  quando a função é chamada de locais diferentes.
 * 
 *  Não varia de acordo com quem chama.
 */

function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa