/*
let numero = 5;
let contador = 0;

while(contador <= 10) {
    let resultados = numero * contador;

    console.log(`${numero} X ${contador} = ${resultados}`)

    contador++;
};

*/




let valor_emprestado = 5000;
let taxa_juros = 0.02; //2%


let total_parcelas = 7;
let contador = 1;

while (contador <= total_parcelas) {
    let numero_de_parcela = contador;

    let juros_de_emprestimo = valor_emprestado * taxa_juros * numero_de_parcela;

    console.log(`Durante esses ${numero_de_parcela} mes(es), o juros foi de: ${juros_de_emprestimo.toFixed(2)}R$`);

    contador++;
}