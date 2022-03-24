// Declaração de função (Function hoisting)
falaOi();
function falaOi() {
    console.log('Oie');
}

// First-class objects (Objeto de primeira classe)
// Function expression 
const souUmDado = function() {
    console.log('Sou um dado.');
};
souUmDado();

// Arrow function 
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
}
funcaoArrow();

//Dentro do objeto
const obj = {
    falar() {
        console.log('Função dentro de um objeto');
    }
};
obj.falar();
