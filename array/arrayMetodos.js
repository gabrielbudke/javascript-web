const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

// Remove o último elemento do array
pilotos.pop() 
console.log(pilotos)

// Adiciona um novo elemento no final do array
pilotos.push('Vestappen')
console.log(pilotos)

// Remove o primeiro elemento do array
pilotos.shift()
console.log(pilotos)

// Adiciona um novo elemento no início do array
pilotos.unshift('Hamilton')
console.log(pilotos)


// splice pode adicionar e remover elementos

// adicionar
// apartir do indice 2
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
// apartir do indice 3, vai remover apenas 1
pilotos.splice(3, 1)
console.log(pilotos)

// Pega elementos do array a partir do indice passado
// e retorna um array 
const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)



