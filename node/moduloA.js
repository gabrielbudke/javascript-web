//  Exportar algo de dentro de um módulo node para ser
//  usado em outro módulo

console.log(this) // OUTPUT: Objeto vazio.

// Adiciona no objeto
this.ola = 'Fala Pessoal'
exports.bemVindo = 'Bem vindo ao node!'
module.exports.ateLogo = 'Até próximo exemplo'
