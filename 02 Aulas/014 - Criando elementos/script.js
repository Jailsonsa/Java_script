// criei o elemento p
let novoParagrafo = document.createElement('p');

// criamos o texto do paragráfo
let texto = document.createTextNode("Este é p conteúdo do paragráfo");

novoParagrafo.appendChild(texto);

console.log(novoParagrafo);

// acessando o body
let body = document.querySelector('body');

console.log(body);

body.appendChild(novoParagrafo);

// inserindo em um container

let container = document.querySelector("#container");
console.log(container);

let elem = document.createElement('span');

elem.appendChild(document.createTextNode("Texto span"));

container.appendChild(elem);

