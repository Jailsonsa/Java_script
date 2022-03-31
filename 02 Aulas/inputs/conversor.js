// Conversor de milhas para km

import recebeDados from 'readline-sync';

console.log("Conversor de Milhas para Quilômetros. \n");

let mi = recebeDados.question("Digite a quantidade de milhas: ");
let km = mi / 0.62137;

console.log(`${mi} milhas é equivalente a > ${km.toFixed(2)}km. `);