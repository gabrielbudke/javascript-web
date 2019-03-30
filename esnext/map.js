const tecnologias = new Map();
tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: true })

console.log(tecnologias.react) // retorna undefined
// Maneira de recuperar valor através do Map()
console.log(tecnologias.get('react').framework)

const chavesVariadas = new Map([
    [function() { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número']
])

chavesVariadas.forEach((valor, chave) => {
    console.log(chave, valor)
})

// 'has' -> função que diz se elemento está contido dentro do Map()
console.log(chavesVariadas.has(123))
// deleta elemento contido no metodo Map()
chavesVariadas.delete(123) // Retorna true ou false
console.log(chavesVariadas.has(123))
// Atributo mostra quantos elementos estão dentro do Map
console.log(chavesVariadas.size)

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
chavesVariadas.set(456, 'b')
console.log(chavesVariadas)



