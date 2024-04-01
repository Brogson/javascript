function contar() {
    let inicio = document.querySelector('input#txtinicio')
    let fim = document.querySelector('input#txtfim')
    let passos = document.querySelector('input#txtpassos')
    let res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passos.value.length == 0){
        res.innerHTML = 'Impossível contar!'
        window.alert('[ERRO] Faltam dados!')
        
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passos.value)

        if(p <= 0){
            window.alert('PASSO INVÁLIDO! Considerando passo igual 1')
            p = 1
        }

        if(i < f){
            //contagem progressiva
            for(let c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
            res.innerHTML += ` \u{1F6A9}`
        } else{
            //contagem regressiva
            for(c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
            res.innerHTML += ` \u{1F6A9}`
        }

        
    }
}