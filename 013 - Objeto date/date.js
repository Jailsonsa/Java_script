// Objeto date

//const tresHoras = 60 * 60 * 3 * 1000;
//const umDia = 60 * 60 * 24 * 1000;
//const data = new Date(0 + tresHoras + umDia);

//           ----------------------------------

//const data = new Date(2022 , 1, 5, 9, 30, 500); // a, m, d, h, M, s, ms

const data = new Date ('2021-04-07 10:30:50.100');
console.log('Dia', data.getDate()); // Mês começa do zero
console.log('Mês', data.getMonth());
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('Ms', data.getMilliseconds());
console.log('Dia semana', data.getDay()); // 0 - Domingo, 6 - Sábado 
console.log(data.toString());