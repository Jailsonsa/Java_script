/*   Variaveis e condicionais

const notaDesejada = 1000;
let nota1 = 100;
let nota2 = 900;

let resultadoFinal = nota1 + nota2;

console.log(" Sua nota final foi: " + resultadoFinal);

if (resultadoFinal >= 1000) {
    console.log(` Parabéns você foi aprovado!!!`)

} else if (resultadoFinal >= 500  <= 999) {
    console.log(" Lamento, más não foi dessa vez. ")
} else {
    console.log("Nenhuma nota encontrada ):")
}
*/ 



// Usando FOR e ARRAY juntos

/*
for(let index = 0; index < frutas.length; index++) {
    console.log(frutas[index]);
};
*/


//     ARRAY

let frutaExtra = "Carambola"; 

let frutas = [
    "Manga",
    "Melancia",
    "Abacaxi",
    "Morango",
    "Uva",
    "Banana",
    "Melão",
    "Abacate",
    frutaExtra,
    "Tomarindo", 
    "Jaca"
];

//   FORMA 1
let ul = document.querySelector('ul');

for(let index = 0; index < frutas.length; index++) {
    let liHtml = "<li>"+ frutas[index] + "</li>";
    ul.innerHTML = ul.innerHTML + liHtml;
}

// FORMA 2
for(let index = 0; index < frutas.length; index++) {
    let addLiHtml = '<li>' + frutas[index] + '</li>';
    document.querySelector("ul").ul.innerHTML += addLiHtml;
}