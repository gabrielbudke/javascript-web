function MeuObjeto() {}
console.log(MeuObjeto.prototype)

/**
 *  Quando cria um objeto apartir de uma função
 *  construtora usando 'new ', o protótipo(__proto__) 
 *  do objeto aponta para a funcao criada. 
 *                               
 */
const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__) // true
console.log(MeuObjeto.prototype === obj1.__proto__) // true

// Toda função tem o atributo 'prototype'
MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}!`)
}

obj1.falar()

obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {}
// Mudando a referencia de obj3
// Saindo de 'Object.prototype' para 'MeuObjeto.prototype'
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar();

//Resumindo a loucura...
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype) // true
console.log(MeuObjeto.__proto__ === Function.prototype) // true 
console.log(Function.prototype.__proto__ === Object.prototype) // true
// Depois do 'Object.prototype' não tem outro objeto acima
// Ele existe embora seje nulo
console.log(Object.prototype.__proto__ === null) // true
