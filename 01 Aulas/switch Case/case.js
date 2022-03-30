// Utilizando Switch
const data = new Date('2010-04-01 08:30:50.245')
let diaSemana = data.getDay();
let diaSemanaText 

switch (diaSemana) {
    case 0:
        diaSemanaText = 'Domingo';
        break;
    case 1:
        diaSemanaText = 'Segunda';
        break;
    case 2:
        diaSemanaText = 'Terça';
        break;
    case 3:
        diaSemanaText = 'Quarta';
        break;
    case 4:
        diaSemanaText = 'Quinta';
        break;
    case 5:
        diaSemanaText = 'Sexta';
        break;
    case 6:
        diaSemanaText = 'Sabado';
        break;
    default:
        diaSemanaText = '';
        break;
}