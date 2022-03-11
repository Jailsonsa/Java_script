function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 19
    msg.innerHTML = `Agora é ${hora} hora.`
    if (hora >= 0 && hora < 12){
        //BOM DIA!
        img.src = 'img/manha.jpg'
        document.body.style.background = 'rgb(232, 216, 172)'
    } else if (hora >= 12 && hora <= 18){
        //BOA TARDE!
        img.src = 'img/tarde.jpg'
        document.body.style.background = '#fc8100'
    } else {
        //BOA NOITE!      
        img.src = 'img/noite.jpg'  
        document.body.style.background = 'hsl(189, 36%, 22%)'
    }   
}