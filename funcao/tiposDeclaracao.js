console.log(soma(3, 4))

/** ôô
 *  
 *  funtion declaration
 * 
 *      Quando se define uma função desta
 *      forma, o interpretador primeiro 
 *      carrega todas as funçoes do arquivo, 
 *      deixa preparado para depois executar 
 *      demais códigos.
 * 
 */
function soma (x, y) {
    return x + y
}

/********************************************
 *  function expression
 *      Só usar a função depois dela ter 
 *      sido declarada.
 * 
 */

const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 4))  

// named function expression
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3, 4))