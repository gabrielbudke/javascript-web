const pai = { nome: 'Pedro', corCabelo: 'preto' }

// Cria o objeto filha tendo o objeto 'pai'
// como protótipo.
// Passa como argumento o objeto que vai ser
// o prototipo do objeto criado
const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

// Posso definir os atributos e passa-los
// como argumento.
const filha2 = Object.create(pai, {
    nome: {value: 'Bia', writable: false, enumerable: true }
})

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

// For para verificar se determinada
// propriedade pertence ao objeto que
// esta sendo percorrido.
for(let key in filha2) {
    // Verifica se aquela propriedade pertence ao objeto
    filha2.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por herança: ${key}`)
     
}