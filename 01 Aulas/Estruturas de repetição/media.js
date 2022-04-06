// O objetivo é exibir o resultado de acordo com o valor da média e para isso usamos a estrutura de repetição for em conjunto com a estrutura condicional if

let notas_trimestrais = [5, 7, 5, 5];

let soma_notas = 0;

const quantidade_de_notas = 4;

for (let contador = 0; contador < quantidade_de_notas; contador++) {
    soma_notas = soma_notas + notas_trimestrais[contador];
}

let media = soma_notas / quantidade_de_notas; 

if (media >= 6) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}


