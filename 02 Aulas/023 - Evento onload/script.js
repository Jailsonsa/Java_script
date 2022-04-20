window.onload = function() {

    console.log("Carregou o DOM!");

    var title2 = document.querySelector("#title");
    console.log(title2);


};

console.log("Carregou o js");

var title = document.querySelector("#title");
console.log(title);

/*
1 = Eu não posso acessar os elementos DOM se eu não tenho eles carregado.

PARA RESOLVER....

2 = Eu posso encapsular todo o meu código no onload{}, ae sim ele vai exibir esses elementos da página...pq este evento onload carrega após o carregamento do DOM. por isso a diferençã na hr de imprimir pq ele espera td o HTML ou o DOM tiver completamente carregado.
*/