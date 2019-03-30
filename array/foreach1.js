const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

// A função callback do 'forEach' suportar 3 argumentos
// nome, indice e o proprio array
aprovados.forEach(function(nome, indice, array) {
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)


