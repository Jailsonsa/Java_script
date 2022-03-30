//  Simplificado 
let precos = [55, 40, 30, 10, 80]
precos.push(1)
precos.push(50)
precos.sort()
console.log(precos)
console.log(`O  vetor tem ${precos.length} posição.`)
console.log(`Esse é último valor do vetor ${precos[5]}`)
let ver = precos.indexOf(80)
if(ver == -1) {
    console.log(`O valor não foi encontrado!`)
}else {
    console.log(`O valor procurado está na posição ${ver}`)
}
