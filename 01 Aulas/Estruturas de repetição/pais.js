//ESTRUTURA DE REPETIÇÃO WHILE-percorrendo coleção de dados.
let paises = [
    "França",
    "Ítalia", 
    "Brasil", 
    "USA",
    "Inglaterra",
    "Argentina",
    "Grécia", 
    "Chile"
 ];
let contador = 0;

while (contador < paises.length) {
    console.log(paises[contador]);
    contador++;
};

// Para não fazer o console.log em cada país
// Ex: paises[0] paises[1] paises[2] paises[3] paises[4]....
/* 
Com a estrutura de repetição WHILE podemos percorrer coleções de dados usando a propriedade LENGTH da coleção
 */