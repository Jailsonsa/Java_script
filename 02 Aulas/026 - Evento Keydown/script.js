// Keydown
document.addEventListener("keydown", function(event) {

    if(event.key === "Enter") {
        console.log("APERTOU ENTER!!!");
    } 

});

// Keyup 
document.addEventListener("keyup", function(event) {

    if(event.key === "Enter") {
        console.log( "Soltou o Enter" )
    }
});