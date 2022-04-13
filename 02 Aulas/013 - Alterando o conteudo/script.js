//  selecionar o elemento
let title = document.querySelector('#title');

//FORMA DE ALTERAR ====> innerHTML <====
title.innerHTML = "TESTANDO..."

// selecionar o elemento
let subtitle = document.querySelector('.subtitle');


// FORMA DE ALTERAR
// ====> textContent <==== -> mais utilizado, recomendado e performático
subtitle.textContent = "Texto alterado!!!"
