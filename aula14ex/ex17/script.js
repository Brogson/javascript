function gerar(){
    let num = document.getElementById('txtnumero')
    let tab = document.getElementById('selTab')

    if(num.value == 0){
        window.alert('[ERRO] Por favor digite um número')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while(c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
}