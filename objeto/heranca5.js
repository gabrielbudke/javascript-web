console.log(typeof String) // saida -> function
console.log(typeof Array) // saida -> function
console.log(typeof Object) // saida -> function

//_______________________________________________

// String.prototype

// 'reverse' não existe por padrao na API
// mas é possível adicionar novas funções
// e atributos dentro de um determinado protótipo
String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

console.log('Escola Cod3r'.reverse())

//___________________________________

Array.prototype.first = function() {
    return this[0]
}

console.log([1,2,3,4,5].first())
console.log(['a', 'b', 'c'].first())

//____________________________________
// É possível alterar comportamentos já
// existentes através do prototype

// NÂO FAÇA ISSO

String.prototype.toString = function () {
    return 'Lascou tudo'
}

console.log('Escola Cod3r'.reverse()) // output -> odut uocsaL