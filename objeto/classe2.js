class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

/**
 *  'extends' é a forma de no âmbito de classe,
 *  definir que determinada classe tem outra classe
 *  como protótipo.
 *  
 *  Define a relação de protóripos.
 */
class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor') {
        // Instanciando a funçao construtor da
        // super classe.
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)