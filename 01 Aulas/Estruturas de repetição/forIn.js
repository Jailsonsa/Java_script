//Quando for necessário percorrer as propriedades de um objeto, utilize a estrutura de repetição for .. in para resolver esse problema

let produtos = [
    {id: 1, nome: "Pizza", preco: 45},
    {id: 2, nome: "Macarronada", preco: 25},
    {id: 3, nome: "Lasanha", preco: 45},
    {id: 4, nome: "Nhoque", preco: 25}
]

let desconto = 5;

//for
for (let contador = 0; contador < produtos.length; contador++) {
    let produto = produtos[contador];

//for...in
    for (let dados in produtos) {
        if (dados == "preco") {
            let preco = dados;

            let preco_novo = produto[preco] - desconto;

            console.log(`O preço com desconto é: ${preco_novo.toFixed(2)}`);
        } else {
            console.log(`${dados} : ${produto[dados]}`);
        }

    }

}
