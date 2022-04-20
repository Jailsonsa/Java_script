// Inserir Click
var btn = document.querySelector("#btn");

btn.addEventListener('click', function() {

    console.log("Clicou");

    console.log(this);

    this.style.color = "red";

    this.style.background = "black"

});

// Click afetando outros elementos 

let title = document.querySelector("#title");

title.addEventListener("click", function() {

    console.log("teste...");

    var subtitle = document.querySelector(".subtitle");

    subtitle.style.display = "none";

});


// Double click
var container= document.querySelector("#container ")
container = addEventListener("dblclick", function() {
    
    console.log("clique duplo!")
})