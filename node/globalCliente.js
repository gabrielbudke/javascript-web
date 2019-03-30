// não é necessário atribuir a uma váriavel porque
// no arquivo 'global.js' não foi exportado/retornado
require('./global');
console.log(MinhaApp.saudacao())

MinhaApp.nome = 'Eita!'
console.log(MinhaApp.nome)
