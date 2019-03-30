/**
 *  Contexto Léxico: (contexto no qual foi escrito)
 * 
 *      Quando uma funçao é declarada no JS
 *      ela não tem apenas o seu conteúdo, 
 *      nome, parametro e o que ela retorna, 
 *      ela tbm tem consiencia do local que ela 
 *      foi definida. 
 * 
 *      Carrega consigo o contexto no qual ela 
 *      foi declarada.
 *      
 */

const valor = 'Global'

function minhaFuncao () {
    console.log(valor)
}

function exec () {
    const valor = 'Local'
    minhaFuncao()
}

exec()