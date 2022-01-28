// Variavel interna e externa
/*
 
INTERNA => Assim não vai

function executar(){
    let nome = "Jailson";
    console.log(nome);
}
 executar();
 console.log(nome);  => Tirar esse console para rodar

 */

 // EXTERNA => Assim vai

let nome = "Jailson";

function executar(){
    console.log(nome);
    nome = "Silva";
}

executar();
console.log(nome);













