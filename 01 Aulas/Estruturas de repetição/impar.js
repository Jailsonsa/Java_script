//  Um exemplo de estrutura de repetição while que junto com uma estrutura de condição verifica quais números de um array são pares ou ímpares.

let numeros = [10, 5, 8, 7, 9, 14, 4, 11, 44];

let total_impares = 0;
let total_pares = 0;

let contador = 0;
while (contador < numeros.length) {
    if (numeros[contador] % 2 == 0 ){ // Levei contador pra dentro de let numeros...
        total_pares++;    // Verifiquei se o numeros[contador] é múltiplo de 2 e se o resto é == 0 <> Se sim vai exibir os num PAR
    } else {
        total_impares++; 
    }

    contador++;
};


console.log("O total de números pares é: " + total_pares);
console.log("O total de números impares é: " + total_impares);