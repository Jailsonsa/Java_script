const nome = "Jailson";

function fala_nome() {
    console.log(nome);  // De dentro da função eu posso usar
}                      // oq está fora dela (vizinho).
/* 
    Então isso é o escopo léxico a função conhece o local onde ela foi declarada, tudo que ta declarada dentro dela ou nos vizinhos...buscando no pai dela no pai do pai dela...Até chegar no escopo global, se não econtra vai exibir um [ERRO!]nome is not defined 
*/

function usa_fala_nome() {
    const nome = "Silva";
    fala_nome();
}
usa_fala_nome();