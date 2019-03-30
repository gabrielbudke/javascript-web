
/* 
Set
    > Estrutura de conjunto
    > Não é indexavel
    > Não aceita repetição
*/ 

const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthias')
times.add('Flamengo')
times.add('Vasco')

console.log(times)
console.log(times.size) //Tamanho do conjunto
console.log(times.has('vasco'))
console.log(times.has('Vasco'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const setNomes = new Set(nomes)
console.log(setNomes)






