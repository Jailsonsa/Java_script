
let funcionarios = [
    {id: 1, nome: "César", habilitado: false},
    {id: 2, nome: "Jéssica", habilitado: false},
    {id: 3, nome: "Renan", habilitado: true},
    {id: 4, nome: "Marlon", habilitado: false},
    {id: 5, nome: "Ana", habilitado: true}
];

let contador = 0;
let encontrouHabilitado = false;

while (contador < funcionarios.length) {
    let funcionario = funcionarios[contador];

    contador++;

    if (funcionario.habilitado == true) {
        console.log(`Funcionário habilitado encontrado: ${funcionario.nome}`)
        encontrouHabilitado = true;
        continue;
    } 
    
    

}

if (!encontrouHabilitado) {
    console.log("Nenhum funcionário habilitado encontrado");
}
