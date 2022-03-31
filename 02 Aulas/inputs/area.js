// Calculando a área do triângulo.

import recebeMedida from 'readline-sync';

console.log("Area do triangulo: \n");

let base = recebeMedida.question("Informe a base do triangulo: ");
let altura = recebeMedida.question("Informe a altura do triangulo: ");

let area = (base * altura) / 2;

console.log(`Para saber a área multipliquei ${base} X ${altura} e fiz a divisão por 2
quê é igual: ${area} essa é a área do triangulo.`);