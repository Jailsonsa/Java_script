// Sistema que fala se o num é par ou impar

function parimpar(n){
    let numero = n
    if(n%2 == 0){
        return `O número ${numero} é Par!`
    } else{
        return `O numero ${numero} é Impar!`
    }
}

console.log(parimpar(7))

/*
function parimpar(n) {
    if(n%2 == 0){
        return 'Par!'
    }else{
        return 'Impar!'
    }
}

console.log(parimpar(2))
*/