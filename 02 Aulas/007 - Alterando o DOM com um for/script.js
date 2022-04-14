let frutas = ['Manga', 'Maçã', 'Pera', 'Jaca', 'Uva'];

// criei um elemento UL
var listaUl = document.createElement('ul');
//  colocando a ul dentro do body
var body = document.getElementsByTagName('body');
console.log(body[0]);

body[0].appendChild(listaUl);

var listaNoBody = document.getElementsByTagName('ul');
console.log(listaNoBody[0]);

for(var i = 0; i < frutas.length; i++) {
    var liFor = document.createElement('li');

    var textoLi = document.createTextNode(frutas[i]);

    liFor.appendChild(textoLi);

    listaNoBody[0].appendChild(liFor);
}