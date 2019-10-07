'use strict'

window.addEventListener('load', ()=> {
    
    // Eventos del raton
    function cambiarColor(){
        var bg = boton.style.background;
        if(bg == "green"){
            boton.style.background = "red";
        } else{
            boton.style.background = "green";
        }

        boton.style.padding = "10px";
        boton.style.border = "1px solid #ccc";

        return true;
    }

    var boton = document.querySelector("#boton");

    // Click
    boton.addEventListener('click', function(){
        cambiarColor();
    });

    // Mouyse Over
    boton.addEventListener('mouseover', function(){
        boton.style.background = "yellow";
    });

    //  Mouse out
    boton.addEventListener('mouseout', function(){
        boton.style.background = "#ccc";
    });

    // Focus
    var input = document.querySelector("#campo_nombre");
    input.addEventListener('focus', function(){
        console.log("Estas dentro del input");
    });


    // Blur
    input.addEventListener('blur', function(){
        console.log("Estas fuera del input");
    });

    // Keydown
    input.addEventListener('keydown', function(event){
        console.log("Pulsando esta tecla: ", String.fromCharCode(event.keyCode));
    });

    // Keypress
    input.addEventListener('keypress', function(event){
        console.log("Tecla presionada: ", String.fromCharCode(event.keyCode));
    });

    // Keyup
    input.addEventListener('keyup', function(){
        console.log("Tecla soltada");
    });
});