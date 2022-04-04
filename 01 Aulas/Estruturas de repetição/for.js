//=============Estruturas de repetição============

let valor_produto = 750;

for(let contador = 1; contador <= 10; contador++) {
    let valor_da_parcela = valor_produto / contador;
    
    console.log(`Nº de parcelas: ${contador} - Valor da parcelas: R$${valor_da_parcela.toFixed(2)}`)
}

