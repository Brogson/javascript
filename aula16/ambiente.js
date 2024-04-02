function parimp(n){
    if(n%2==0){
        return 'par'
    } else{
        return 'ímpar'
    }
}
let res = parimp(11)

console.log(`O valor 11 é ${res}`)