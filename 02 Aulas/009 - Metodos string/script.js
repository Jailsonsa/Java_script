// Métodos que pode trasformar uma string e modificar

// length 
let nome = 'Jailson';

console.log(nome.length);

// indexOf 
console.log(nome[2]);
let frase = 'Uma vez flamengo sempre flamengo'

console.log(frase.indexOf('vez'));

// slice

let vez = frase.slice(4,7);

console.log(vez);

// replace

let nova_frase = frase.replace("vez", 'teste');

console.log(nova_frase);