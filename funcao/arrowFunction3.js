/**
 *  O 'this' dentro de uma função tradicional
 *  varia conforme a chamada.
 *  
 *  O 'this' aponta para o objeto global tanto
 *  para o Node como no Browser.
 * 
 *  Na função 'arrow' o this aponta para o 
 *  objeto corrente, o arquivo no qual a 
 *  fução foi definida.
 * 
 *  O this de uma 'função arrow' é associado 
 *  ao contexto no qual a função foi escrita
 *  
 */

let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(this)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)

