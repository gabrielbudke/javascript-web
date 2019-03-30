const a = 1, b = 2, c = 3;

// Notação literal
const obj1 = {a: a, b: b, c: c}
const obj2 = {a, b, c}
console.log(obj1, obj2)

const nomeAttr = 'nota';
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr;
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

const obj5 = {
    funcao1: function() {
        //...
    },
    funcao2() { // Nova versão do ES6
        //...
    }
}

console.log(obj5)