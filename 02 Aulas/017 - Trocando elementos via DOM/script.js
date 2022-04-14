// Criar o elemento - colocar uma class. 
// Colocar o texto do elemento - e imprimir.
var element = document.createElement("h3");
element.classList = "h3-substituto";

var texto_h3 = document.createTextNode("Texto do novo h3");
element.appendChild(texto_h3);

console.log(element);

// Selecionei o elemento que vai ser substituido 
// Peguei o pai do elemento - e com replaceChild fiz a troca
var title = document.querySelector("#title");
console.log(title);

var pai = title.parentNode;

pai.replaceChild(element, title);
