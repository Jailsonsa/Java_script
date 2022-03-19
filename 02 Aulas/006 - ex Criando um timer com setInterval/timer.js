function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-BR',{
        hour12: false,
        timeZone: 'UTC'
    })
}

console.log(criaHoraDosSegundos(10))


const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')
let segundos = 0;
let timer;

function iniciaRelogio() {
    timer = setInterval(function() {
        segundos++
        relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000)
}

// catching click event / pegando evento de click 

document.addEventListener('click', function(e){
    const el = e.target;

        if (el.classList.contains('zerar')) {
        relogio.classList.add('zerado')
        relogio.classList.remove('pausado')
        relogio.classList.remove('iniciado')
        clearInterval(timer)
        relogio.innerHTML= '00:00:00'
        segundos = 0 
    }

    if (el.classList.contains('iniciar')) {
        relogio.classList.remove('pausado')
        relogio.classList.add('iniciado')
        clearInterval(timer)
        iniciaRelogio()
    }
       
    if (el.classList.contains('pausar')) {
        relogio.classList.add('pausado')
        relogio.classList.remove('iniciado')
        clearInterval(timer)
    }




})

/*
function relogio() {
    let data = new Date()
    let hora = data.getHours()
    let min = data.getMinutes()
    let seg = data.getSeconds()

    let tempo_correndo = hora + ':' + min + ':' + seg;
    const relogio = document.querySelector('.relogio')
    setInterval(relogio, 500)
    relogio.innerHTML = tempo_correndo;

    // catching click event / pegando evento de click 

    iniciar.addEventListener('click',function(event){
    
})

    pausar.addEventListener('click',function(event){
    
})

    zerar.addEventListener('click',function(event){

})
}
*/

