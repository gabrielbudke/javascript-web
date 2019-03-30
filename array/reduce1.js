/**
 * Reduce:
 *      Função que serve para transformar um array
 *      em um único elemento.
 * 
 *      !! IMPORTANTE !!
 *          Quando não é passado valor inicial para o
 *          reduce, o 'acumulador' assume o valor 
 *          da primeira possição do array.
 *          
 *      reduce.(function(acumulador, atual) {
 *      })
 * 
 * 
 *      
 */

 const alunos = [
     { nome: 'Joao', nota: 7.3, bolsista: false },
     { nome: 'Maria', nota: 9.2, bolsista: true },
     { nome: 'Pedro', nota: 9.8, bolsista: false },
     { nome: 'Ana', nota: 8.7, bolsista: true },
 ]
console.log(alunos.map(a => a.nota))
 const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
     
    console.log(acumulador, atual)
    /**
     * OUTPUT:
     * ACUMULADOR  | ATUAL
     *    7.3      | 9.2
     *   16.5      | 9.8
     *   26.3      | 8.7
     */
     
    return acumulador + atual 
 }, 0 /* <- valor inicial */);

 console.log(resultado)