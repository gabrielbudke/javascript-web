//  IIFE -> Immediately Invoked Function Expression
//  Padrão muito usado para fugir do escopo global.


(function () {
    console.log('Será executada na hora!')
    console.log('Foge do escopo mais abrangente (Ex: escopo global)')
})()