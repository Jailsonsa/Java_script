//fatorial 5! = 5 x 4 x 3 x 2 x 1 = 120


function fatorial(numero){
    let fim = 1
    for(contador = numero; contador > 1; contador--){
        fim*=contador
    }
    return fim
}

console.log(fatorial(5))

