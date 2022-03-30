// Escreva uma função que recebe 2 números e retorne o maior deles.

/* modo1
function max (x, y) {
    if (x > y) {
        return x
    } else {
        return y
    }
}*/

/* modo2
function max2 (x, y) {
    return x > y ? x : y
}

console.log(max2(100, 200))
*/

const max3 = (x, y) => x > y ? x : y

console.log(max3(1000, 50000))