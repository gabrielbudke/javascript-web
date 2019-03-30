/**
 *  NOVO RECURSO DO ES2015
 * 
 *  Operador Destructuring:
 *      operador de desestruturação, ele tira da
 *      estrutura alguma coisa
 *  
 *  Destructuring Object
 * 
 * */

 const pessoa = {
     nome: 'Ana',
     idade: 5,
     endereco: {
         logradouro: 'Rua ABC',
         numero: 1000
     }

 }

 // Operador destructuring
 const { nome, idade } = pessoa
 console.log(nome, idade)

 const { nome: n, idade: i } = pessoa
 console.log(n, i)

 // Retirando um atributo que não existe 
 // dentro do objeto
 const { sobrenome, bemHumorada = true } = pessoa
 console.log(sobrenome, bemHumorada)

// Retirando um atributo dentro de um objeto que
// está dentro de outro objeto
const { endereco: { logradouro, numero, cep }} = pessoa
console.log(logradouro, numero, cep)


