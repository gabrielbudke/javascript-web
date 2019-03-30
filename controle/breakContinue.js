/**
 *  BREAK e CONTINUE
 *  
 *      Funcionam como desvio de fluxo.
 *  
 *      BREAK: não influencia em bloco if, somente 
 *      em blocos switch, while e for.
 * 
 *      CONTINUE: funciona em laços for e while
 * 
 * 
 */


const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// ==== break =========================
for(x in nums) {
    if(x == 5) {
        break // ñ age no bloco if, mas faz com que saia do for
    } 
    console.log(`${x} = ${nums[x]}`)
}

// ===== continue ================
for(y in nums) {
    if(y == 5) {
        continue // age em cima do laço for interrompe aquela repeticao
    }

    console.log(`${y} = ${nums[y]}`)
}

// rótulo
externo:
for(a in nums) {
    for(b in nums) {
        if(a == 2 && b == 3) break externo
        console.log(`Par = ${a}, ${b}`)
    }
}

console.log("Fim!!")