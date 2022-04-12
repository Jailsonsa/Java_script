// A INSTRUÇÃO THIS
console.clear();


let pessoa = {
    nome: "Jailson",
    idade: 20,
    falar: function() {
        console.log('Olá, tudo bem?!')
    },
    aniversariou: function() {
        this.idade += 1;
    },
    saudacao: function(){
        return 'Sr. ' + this.nome;
    },
};

console.log(pessoa.idade);

pessoa.aniversariou();
pessoa.aniversariou();
pessoa.aniversariou();
pessoa.aniversariou();

console.log(pessoa.idade);
    
let sdc = pessoa.saudacao();

console.log('Oiiiee ' + sdc);