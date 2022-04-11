// Modificando string

// toLwerCase e toUpperCase

let frase = "Está é a frase que vamos manipular";

let frase_caixa_alta = frase.toUpperCase();

console.log(frase_caixa_alta);
console.log(frase.toLowerCase());

// trim 

let nome = "       Jailson      "; 

let nomeTrim = nome.trim();
console.log(nome)
console.log(nomeTrim);

// split 

console.log(frase.split(" "));
let frutas = "Manga, Banana, Melancia, Pera"

console.log(frutas.split(", "));