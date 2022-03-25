//Testando Objeto e Propriedades

var aluno_academia = {
    id: 10,
    nome: "Francisco Junior",
    peso: 55,
    altura: 1.75
}

var nome_aluno = aluno_academia.nome;
var peso_aluno = aluno_academia.peso;
var altura_aluno = aluno_academia.altura;

var imc_aluno = peso_aluno / (altura_aluno * altura_aluno);

console.log(`O IMC do aluno é: ${imc_aluno.toFixed(2)}`)

if (imc_aluno < 18.5) {
    console.log(`${nome_aluno} você está abaixo do peso!`);
} else if (imc_aluno >= 18.5 && imc_aluno <= 24.99) {
    console.log(`${nome_aluno} você está com o peso normal!`);
} else {
    console.log(`${nome_aluno} você está acima do peso!`)
}