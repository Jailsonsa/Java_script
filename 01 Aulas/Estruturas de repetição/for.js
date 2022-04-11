//=============Estruturas de repetição============
/*
let valor_produto = 750;

for(let contador = 1; contador <= 10; contador++) {
    let valor_da_parcela = valor_produto / contador;
    
    console.log(`Nº de parcelas: ${contador} - Valor da parcelas: R$${valor_da_parcela.toFixed(2)}`)
}
*/

for(let i = 0; i < 10; i++) {
    console.log("Respitindo for:" + i);
}

let array = [1, 2, 3 , "quatro"];

for(let c = 0; c < array.length; c++) {
    console.log(array[c]);
}