// construtor do objeto

function Pessoa(nm, sob, tel) {
    this.nome = nm;
    this.sobrenome = sob;
    this.telefone = tel;

    // Colocar nome e sobrenome
    this.nome_completo = function(){
        return this.nome + " "+ this.sobrenome;
    }

    // Alterar o nome.
    this.alterar_nome = function(novo_nome){
        this.nome = novo_nome;
    }

}

let cliente = new Pessoa("Lucas", "Santos", 99984345494);

console.log(cliente.nome);
console.log(cliente.nome_completo());
cliente.alterar_nome("Lennon");
console.log(cliente.nome_completo());
console.log(cliente.telefone);