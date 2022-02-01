// Construtor do objetos

function Pessoa(nm, sb, tel) {
    this.nome = nm;
    this.sobrenome = sb;
    this.telefone = tel;

    // criando uma function dentro de outra para colocar o nome completo
    this.nome_completo = function() {
        return this.nome +" "+ this.sobrenome;
    }
    // criando uma function dentro de outra para add um novo nome
    this.alterar_nome = function(novo_nome){
        this.nome = novo_nome;
    }
}
let cliente = new Pessoa('Paulo', 'Souza', 99746189);

console.log(cliente.nome);
console.log(cliente.nome_completo());
cliente.alterar_nome('Manuel');
console.log(cliente.nome_completo());
