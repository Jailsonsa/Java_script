function carregar() {
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagens')
    let data = new Date()
    let hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora <= 12){
        //FOTO DA MANHÃ
        img.src = 'img/manha.jpg'
        document.body.style.background = 'rgb(142, 142, 175)'
    } else if (hora > 12 && hora <= 18){
        //FOTO DA TARDE
        img.src = 'img/tarde.jpg'
        document.body.style.background = '#FF7001'
    }else {
        //FOTO DA NOITE
        img.src = 'img/noite.jpg'
        document.body.style.background = 'hsl(189, 36%, 22%)'
    }
}

