/*  
O que é JSON???
               
• JSON = JavaScript Object Notation;

• Um formato de representação de dados;

• Mais simples que XML, que é utilizado para fins parecidos;

• Utiliza o formato de chave e valor;

• é leve para ser enviado por requisições;

• Muito utilizado para API e também aquivos de configuração;
*/

const objs = [
    {
        "nome": "Jailson",
        "Idade": 20,
        'esta_trabalhando': false,
        "detalhes_idade" : {
            "data_nascim": "07/04/2002",
            "hora_nascim": 10.00 
        },
        "hobbies": ['Programar', 1, 2, true, false, null]
    },
    {
        "nome": "Marco",
        "Idade": 10,
        'esta_trabalhando': null,
        "detalhes_idade" : {
            "data_nascim": "02/01/2012",
            "hora_nascim": 19.00 
        },
        "hobbies": ['Jogar...']
    },
]

//Estou querendo inserir esses usuários no sistema
// Imprimir como JSON----Primeiro tem que realizar a conversão
//converter obj para JSON...Para enviar para API

const jsonData = JSON.stringify(objs);
console.log(jsonData);

//Agora quero receber esses usuários, quero imprimir na minha tela.
// Dps de ter enviado vou receber, no formato de JSON agora tenho que converter para obj de novo.
//Convertendo JSON para OBJETO  

const objData = JSON.parse(jsonData);
console.log(objData);

objData.map((pessoas)=>{
    console.log(pessoas.nome);
});

