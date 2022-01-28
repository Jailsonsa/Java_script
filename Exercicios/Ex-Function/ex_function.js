/* 
Criar a variável numero1 e número2
Pode atribuir os valores que quiser a cada variável

Criar quatro funções para executar as operações matemáticas mais conhecidas: adição, subtração, multiplicação e divisão.

apresentar no console o resultado de cada uma das operações efetuadas com numero1 e numero2
*/


let numero1 = 20;
let numero2 = 10;

function adicionar(a,b){
    return a + b;
}
function subitrair(a,b){
    return a - b;
}
function dividir(a,b){
    return a / b;
}
function multiplicar(a,b){
    return a * b;
}

console.clear
 
let operacao = `Operações com os número ${numero1} e ${numero2} em:`

console.log(operacao + " Adição = "+ adicionar(numero1, numero2));
console.log(operacao + " Subtração = "+ subitrair(numero1, numero2));
console.log(operacao + " Divisão = "+ dividir(numero1, numero2));
console.log(operacao + " Multiplicação = " +multiplicar(numero1, numero2));