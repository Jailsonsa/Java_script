function getDayWeekText (diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana) {
        case 0:   //caso o dia da semana for 0 ...
            diaSemanaTexto = 'Domingo';  // Fala a condição, se for 0 : domingo
            return diaSemanaTexto;  // para por aqui caso seja 0
        case 1:  
            diaSemanaTexto = 'Segunda'; 
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta';
            return diaSemanaTexto;
        case 4: 
            diaSemanaTexto = 'Quinta';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta';
            return diaSemanaTexto;
        case 6: 
            diaSemanaTexto = 'Sábado';
            return diaSemanaTexto;
        default:  // É utilizado como o "ELSE" 
            diaSemanaTexto = '';
    }
    return diaSemanaTexto;
}


const data = new Date('2015-04-17 00:00:00');
let diaSemana = data.getDay();
const diaSemanaTexto = getDayWeekText(diaSemana);
 
console.log(diaSemana, diaSemanaTexto);