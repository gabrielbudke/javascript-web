// Armazenando uma funçao em uma variavel
const imprimirSoma = function(a, b){ // funcao anonima
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma funçao arrow em uma variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

// Retorno implicito
const subtracao = (a, b) => a - b
console.log(subtracao(2,3))

// Funcao arrow com retorn implicito passando
// apenas um parametro
const imprimir2 = a => console.log(a)
imprimir2('Legal !!!')