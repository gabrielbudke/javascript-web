/**
 *  Conceito:
 *      Funçao sendo uma receita 
 *      de bolo, algoritmo.
 * 
 *      Executa um processo baseado em uma 
 *      setença de código. Define um bloco de código
 *      associado com todas as setenças de códigos 
 *      que serao executados quando aquela funçao for
 *      chamada.
 *       
 *  */

 // FUNCAO SEM RETORNO
 function imprimirSoma(a, b){
     console.log(a + b)
 }

// Chamando a funçao 
 imprimirSoma(2, 3)

// Passado um parâmetro apenas, ele faz 
// a operação com um undefined
 imprimirSoma(2)

 // Passando mais valores dentro dos parametros
 // o JS ignora o restante e pega somente os 
 // que foram estipulados
 imprimirSoma(2, 10, 3, 4, 5 , 6, 7, 8)

// FUNÇAO COM RETORNO
function soma(a, b = 0){
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
