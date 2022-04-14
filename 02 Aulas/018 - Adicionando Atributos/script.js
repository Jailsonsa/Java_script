// Alterar atributo
let title = document.querySelector("#title");

title.setAttribute("class", "testando-atributo");
console.log(title);

var btn = document.querySelector("#btn");
btn.setAttribute("disabled", "disabled");

let subtitle = document.querySelector(".subtitle");

subtitle.setAttribute("id", "titulo-2");

// Remover atributo

let lista1 = document.querySelector("#lista1");

lista1.removeAttribute("id");