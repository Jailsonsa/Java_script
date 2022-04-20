/*
//=====  setTimeout  ======
console.log("Antes")

setTimeout(function() {
// uma fuction que é passada como argumento pra outra é considerada CALLBACK.
    console.log("Testando o setTimeout")
       //função assíncrona 

}, 2000);

console.log("Depois");

// ====== setInterval ======
setInterval(function() {

    console.log("Testando o setInterval")
    //tbm é assíncrona

}, 50000);

// vimos a callback assíncrona

*/


// Como parar o evento - clearTimeout e clearInterval

var x = 0;

let myTimer = setTimeout(function() {
    console.log('O x é 0');
}, 1500);

x = 5

if(x > 0) {
    clearTimeout(myTimer);
    console.log("O x passou de 0");
}


// clearInterval na prática 

let myInterval = setInterval(function() {
    console.log("Imprimindo interval")
}, 1000);

setTimeout(function() {

    console.log("Não precisa mais desse intervalo.");
    clearInterval(myInterval);

}, 10000);
