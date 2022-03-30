console.clear()


//let data = new Date(2020, 12)// a, m, d, h, m, s, ms

let data = new Date('2002-04-07 10:30:00.567')// STRING
console.log('Dia', data.getDate())
console.log('Mês', data.getMonth() + 1) // MÊS COMEÇA DO 0
console.log('Ano', data.getFullYear())
console.log('Hora', data.getHours())
console.log('Min', data.getMinutes())
console.log('Seg', data.getSeconds())
console.log('ms', data.getMilliseconds())
console.log('Dia semana', data.getDay()) // 0 - DOMINGO, 6 - SÁBADO
console.log(data.toString())