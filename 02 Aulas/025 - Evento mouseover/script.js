// Evento de mouseover 

let title = document.querySelector("#title");

title.addEventListener("mouseover", function() {

    title.style.backgroundColor = "yellow";

});

// Evento de  mouseout 

title.addEventListener("mouseout", function() {

    this.style.backgroundColor = "white";

});

// Afetar outro elemento com mouseover 
var subtitle = document.querySelector(".subtitle");

subtitle.addEventListener("mouseover", function() {
   
    var legenda = document.querySelector("#legenda");

    legenda.classList.remove("hide");

});

subtitle.addEventListener("mouseout", function() {

    var legenda = document.querySelector("#legenda");

    legenda.classList.add("hide");
})
