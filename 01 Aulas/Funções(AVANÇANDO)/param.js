//GERAL = Parâmetros da função
console.clear();

// (1) EXIBINDO TDS OS ARGUMENTOS OU PEGANDO UM ESPECIFICO[]
/*
           === (1) ===
function funcao() {
    console.log(arguments[0]);
}
funcao('Valor', 0, 1, 2, 3, 4, 5); 
*/ 

// SOMANDO TDS OS VALORES EXIBIDOS
// a função definida com a palavra function tem uma variável
// especial: Arguments que sustenta tds os arguments enviados
/*
function funcao() {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total);
}
funcao(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
*/

// Somando números
// Add valores padrões
// mas quando eu falar o valor de b lá no parâmetro,
// ele vai ser usado.
/*                                              
function funcao(a, b = 1, c = 1) {
    //console.log(a + b);
    console.log(a + b + c);
}
funcao(1,  10,); 
*/

// Rest parameter
// o parârametro resto precisa ser o último da função
/*
const conta = function (operador, acumulador, ...numeros) {
    for(let numero of numeros){
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
};
conta('+', 9, 20, 30, 40, 50);
*/

/* Se tiver o nome function vai aparecer arguments, mesmo 
ela sendo uma function expression....ela só ñ funciona 
para javaScript no ARROW FUNCTION => */

const conta = (...args) => {
    console.log(args);
};
conta('+', 1, 20, 30, 40, 50, 60);