let hoje = new Date();
let diaSemana = hoje.getDay();
// 'Matematica', 'Ciências', 'Artes', 'Historira' , 'Geografia', 'Programação', 'Finaças'

diaSemana = 7  


switch(diaSemana) {
    case 0:
        console.log(`Hoje é domingo vai ter aula de: Matematica`)
        break
    case 1:
        console.log(`Hoje é segunda-feira vai ter aula de: Ciências`)
        break
    case 2:
        console.log(`Hoje é terça-feira vai ter aula de: Artes`)
        break
    case 3:
        console.log(`Hoje é quarta-feira vai ter aula de: Historia`)
        break
    case 4:
        console.log(`Hoje é quinta-feira vai ter aula de: Geografia`)
        break
    case 5:
        console.log(`Hoje é sexta-feira vai ter aula de: Programação`)
        break
    case 6:
        console.log(`Hoje é sábado vai ter aula de: Finaças`)
        break
    default: 
        console.log('[ERRO!] Hoje não tem aula, Faça ás atividades!')
}