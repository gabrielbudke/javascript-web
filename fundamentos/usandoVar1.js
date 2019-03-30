/**
 *  Scopo: o local onde aquela variavel é visível
 *  você declara a variavel fica visivel somente 
 *  dentro do bloco
 * 
 *  VAR: fica visível para todos dentro e 
 *  fora do bloco. É do tipo global
 *  Não respeita o escopo de bloco, 
 *  mas respeita o escopo de função.
 */



{
    {
        {
            {
                var sera = "Será??"
                console.log(sera)
            }
        }
    }
}

console.log(sera)

function teste(){
    var local = 123
    console.log(local)
}

teste()
console.log(local)