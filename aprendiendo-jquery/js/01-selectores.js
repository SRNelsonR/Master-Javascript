$(document).ready(function() {
    // Selector de ID
    var rojo = $("#rojo").css("background", "red")
                        .css("color", "white");
    
    var rojo = $("#amarillo").css("background", "yellow")
                        .css("color", "green");

    var rojo = $("#verde").css("background", "green")
                        .css("color", "white");

    // Selectores de clases
    var mi_clase = $('.zebra').css("padding", "5px");
    console.log(mi_clase.eq(1));
    // mi_clase.css("border", "5px dashed black");

    var mi_clase = $('.sin_borde').click(function(){
        console.log("Click");
        $(this).addClass('zebra');
    });
});