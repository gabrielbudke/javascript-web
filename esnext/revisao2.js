// Arrow Function
const soma = (a, b) =>  a + b
console.log(soma(2,3))

// Arrow Function (this)
// this em funçao arrow -> está associado ao local que a função foi escrita
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// Parametro default
function log(texto = 'Node') {
    console.log(texto);
}

log();
log('Gabriel');

// OPERADOR REST
// > ideia de ter parâmetros váriados, colocar vários parametros dentro da chamada funçao e esse parametros seram agrupados em um array entro da fução
function total(...numeros) {
   let total = 0
   numeros.forEach(n => total += n);
   return total 
}
console.log(total(2, 3, 4, 5))

