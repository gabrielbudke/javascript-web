/**
 *  Closure:
 *      É o escope criado quando uma 
 *      função é declarada.
 * 
 *      Esse escopo permite a função acessar
 *      e manipular váriaveis externas à função.
 *  
 *      As funções dão sempre prioridade para 
 *      variáveis mais internas quando acessível
 */

 const x = 'Global'

 function fora() {
     const x = 'Local'
     function dentro () {
        return x
     }

     return dentro
 }

 const minhaFuncao = fora()
 console.log(minhaFuncao)
 