function mostraHour() {
    let data = new Date()
        
    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}

let tempoReal = setInterval(function(){
    console.log(mostraHour())
}, 1000);


setTimeout(() => {
    clearInterval(tempoReal)
},5000);

setTimeout(() => {
    console.log('OLÁ MUNDO PIUNN')
}, 5000);
-

/*
function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

// Pra aparecer a hora atualizada a cada 1s
 let time = setInterval(function(){
    console.log(mostraHora());
}, 1000);

// Por quanto tempo vai aparecer a hora atualizada
setTimeout(() => {
    clearInterval(time)
},10000);
*/