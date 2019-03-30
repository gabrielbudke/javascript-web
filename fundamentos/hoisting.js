/** 
 *  Hoisting: significa içar, jogar pra cima.
 *  O interpretados do JS pega a váriavel e joga 
 *  pra cima
 * 
 *  O que acontece na prática com o código abaixo:
 *      
 *      var a  
 *      console.log('a =', a) -> Retorna undefined
 *      a = 2
 *      console.log('a =', a) -> Retorna 2
 * 
 *  Dentro de uma function o intrepretados 
 *  também faz hoisting.
 * 
 *  Hoisting não funciona quando a variavel é 
 *  declarada como let
 */

console.log('a =', a)
var a = 2
console.log('a =', a)

//----- Hoisting com function
function teste(){
    console.log('b =', b)
    var b = 3
    console.log('b =', b)
    
}

teste()

// -----
console.log('c =', c)
let c = 4
console.log('c =', c)
