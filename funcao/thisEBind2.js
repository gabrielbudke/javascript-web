function Pessoa () {
    this.idade = 0

    // Dispara uma outra função apartir de um determinado intervalo
    // Além de receber uma função ele recebe um intervalo
    const self = this
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000) // intervalo em milisegundos
}

new Pessoa

