console.log(module.exports)
console.log(module.exports === this) // true
console.log(module.exports === exports) // true

//  'this' e 'exports' são duas referências para 
//  o mesmo objeto que aponta 'module.exports'
this.a = 1; 
exports.b = 2;
module.exports.c = 3;

// Forma errada de reatribuir o objeto que
// será exportado
exports = null
console.log(module.exports)

// Forma errada de reatribuir o objeto que
// será exportado
exports = { nome: 'Teste' }
console.log(module.exports)

// Modo CORRETO de alterar o objeto que sera exportado
module.exports = { publico: true }
