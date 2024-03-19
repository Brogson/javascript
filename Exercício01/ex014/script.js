function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var oi = window.document.getElementById('oi')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if(hora >= 0 && hora < 5){
   oi.innerHTML = "Ainda está acordado?"
   img.src = 'imagens/madrugada.jpg'
   document.body.style.background = '#222222'
} else if(hora >= 5 && hora < 12){
    oi.innerHTML = "Bom dia!"
    img.src = 'imagens/manhã.jpg'
    document.body.style.background = '#8ad58a'
} else if(hora >= 12 && hora < 19){
    oi.innerHTML = "Boa Tarde!"
    img.src = 'imagens/tarde.jpg'
    document.body.style.background = '#ffaf6a'
} else {
    oi.innerHTML = "Boa noite!"
    img.src = 'imagens/noite.jpg'
    document.body.style.background = '#251207'
}
}