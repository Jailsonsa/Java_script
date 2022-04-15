// Callback

function exibir(num) {
    console.log("O resultado entre as operações é: " + num);
}

function soma(a, b, cb) {
    let operacao1 = a + b;
    cb(operacao1);
}
soma(5, 3, exibir);

function multiplicacao(x, y, cb) {
    let operacao2 = x * y;
    cb(operacao2);
}
multiplicacao(5, 3, exibir);