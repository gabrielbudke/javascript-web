const imprimirResultado = function(nota) {
    /*  Verificar se é do tipo number
    if(isNaN(nota)){
        console.log('Caractere inválido') 
    }else  */ 
    
    if(nota >= 7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epa!!') // CUIDADO!!