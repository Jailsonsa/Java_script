import recebeNumero from "readline-sync";

console.log("Calculadora de soma entre x e y: \n")

let x = recebeNumero.question("Digite o valor para X: ");
let y = recebeNumero.question("Digite o valor para Y: ");

let soma = Number(x) + Number(y);

console.log(`A soma entre ${x} e ${y} é igaul a: ${soma}.`);