// ADD ELEMENTO
// criando o elemento
var el = document.createElement("div");
el.classList = "div-criada";

console.log(el);

var container = document.querySelector("#container");


container.appendChild(el); // <-inserindo elemento filho


// tbm temos o -> inseretBefore - insere antes

var el2 = document.createElement("div");
el2.classList = "div-before";

var div_ja_criada = document.querySelector('#container .div-criada');

container.insertBefore(el2, div_ja_criada);

console.log(container);

