// ARROW FUNCTIONS
/*
Existe uma forma mais simples e curta ao nivel da sintaxe para criar funções,e que é geralmemte mais interessante do que function expressions.

São funções designadas por Arrow Functions.
*/

let funcao = (argumentos) => expressao;
// Esta assinatura cria uma função que aceita argumentos, depois avalia a expresao do lado
// direito e retorna o resultado

// Function noraml:
let fucao = function(a,b,c) {
    return a + b + c;
};
// Transformando em uma ARROW FUNCTIONS
let funcao = (a,b,c) => (a + b + c);

// É uma abreviação de:
let adicao = function(a,b,c) {
    return a + b + c;
};

//Para executar a função:
console.log(adicao(10,30,5)); 