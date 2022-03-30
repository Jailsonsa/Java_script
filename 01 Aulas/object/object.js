// Object
let amigo = {
    nome: 'Lucas',
    sexo: 'M',
    Peso: 70,
    engordou(k=0){
        console.log('ENGORDOU!!!')
        this.Peso += k
    }
}

amigo.engordou(4)
console.log(`O ${amigo.nome} pesa ${amigo.Peso}kg`)