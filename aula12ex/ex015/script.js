function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique seus valores e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //Criança/ bebê
                img.setAttribute('src', 'imagens/homem-bebe.png')
            } else if(idade < 30){
                //Jovem - Adolescente 
                img.setAttribute('src', 'imagens/homem-jovem.jpg')
            } else if(idade < 50){
                //adulto
                img.setAttribute('src', 'imagens/homem-adulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/homem-idoso.png')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //Criança/ bebê
                img.setAttribute('src', 'imagens/mulher-bebe.png')
            } else if(idade < 30){
                //Jovem - Adolescente  
                img.setAttribute('src', 'imagens/mulher-jovem.jpg')              
            } else if(idade < 50){
                //adulto
                img.setAttribute('src', 'imagens/mulher-adulta.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/mulher-idosa.jpeg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos um(a) ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}