console.log(this === global) // OUTPUT: false
console.log(this === module) // OUTPUT: false

console.log(this === module.exports) // OUTPUT: true
console.log(this === exports) // OUTPUT: true

function logThis() {
    console.log('Dentro de uma função...')
    console.log(this === exports) // OUTPUT: false
    console.log(this === module.exports) // OUTPUT: false
    console.log(this === global) // OUTPUT: true

    this.perigo = '...' // -> está colocando no 
                        //    escopo global.

}

// Dentro de uma função o 'this' não aponta para
// 'exports' mas para fora ele aponta
logThis()
