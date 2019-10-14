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
    // console.log(mi_clase.eq(1)); // == mi_clase[1]
    // mi_clase.css("border", "5px dashed black");

    /* var mi_clase =  */
    $('.sin_borde').click(function(){
        console.log("Click");
        $(this).addClass('zebra');
    });

    // Selectores de Etiqueta
    var parrafos = $('p').css("cursor", "pointer");
    parrafos.click(function() {
        var that = $(this);
        if(!that.hasClass('grande')){
            that.addClass('grande'); 
        } else{
            that.removeClass('grande'); 
        }
    });
    // console.log(parrafos);

    // Selectores de Atributo
    $('[title="Google"]').css('background', '#ccc');
    $('[title="Facebook"]').css('background', 'blue');

    // Otros
    // $('p, a').addClass('margen-superior');
    
    // var busqueda = $("#caja").find('.resaltado');
    // var busqueda = $("#caja .resaltado").eq(0).parent().parent().parent().find('[title="Google"]');
    var busqueda = $("#elemento2").parent().parent().find('.resaltado');
    console.log(busqueda);
});