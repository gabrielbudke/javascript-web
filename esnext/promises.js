/**
 * Promises
 * 
 *  > Tradução de promessa
 *  > Usando quando se quer algum tipo de processamento
 *      assíncrono
 *  > Tem dois grandes destinos:
 *      Ser resolvida ou rejeitada
 * 
 *  > Promise aceita somente um parâmetro
 * 
 */

function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que legal!')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))