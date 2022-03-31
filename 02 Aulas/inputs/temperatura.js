// Conversor de Celsius para Kelvin.

import recebeDado from 'readline-sync';

console.log("Conversor de Celsius para Kelvin. \n");

let cels = recebeDado.question("Digite o valor de Celsius: ");
let kelv = Number(cels) + 273.15;

console.log(`${cels}°C equivale a ${kelv} K .`);