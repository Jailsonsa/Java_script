try {// É executada quando não há erros 
    console.log(i); //levando ao erro
    console.log('Abri um arquivo')
    console.log('Manipulei o arquivo e gerou erro')
    console.log('Fechei o arquivo')
    
} catch (e) {//  É executada quando há erros
    console.log('Tratando o erro')
} finally {// Sempre executado
    console.log('FINALLY: Eu sempre sou executado')
}
