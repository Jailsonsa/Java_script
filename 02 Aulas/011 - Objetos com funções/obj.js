console.clear();

let pessoa = {
    nome: function() {
        console.log('Jailson');
    },
    idade: function(x , y) {
        return x + y;
    },
};

pessoa.nome();

let somaIdade = pessoa.idade(10 , 9);
console.log(somaIdade)
