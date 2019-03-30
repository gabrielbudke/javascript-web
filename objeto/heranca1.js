/**
 *  Herança:
 * 
 *      Um objeto em JS tem uma referência para 
 *      seu protótipo.
 */

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}


// Acessar o protótipo desse objeto (objeto pai)
console.log(ferrari.__proto__) // 2 underlines
console.log(ferrari.__proto__ === Object.prototype) // true
console.log(volvo.__proto__ === Object.prototype) // true
console.log(Object.prototype.__proto__ === null) // Tentando acessar um objeto maior (pai)

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto) // output: [function] [function]
console.log(Object.prototype, MeuObjeto.prototype) // output [ {} -> objeto vazio] []