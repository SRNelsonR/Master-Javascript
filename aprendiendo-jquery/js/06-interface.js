$(document).ready(function(){
    // console.log("Hola");
    // Mover elemento por la pagina
    $('.elemento').draggable();

    // Redimensionar
    $('.elemento').resizable();

    // Seleccionar y ordenar elementos
    // $('.lista-seleccionable').selectable();
    $('.lista-seleccionable').sortable({
        update:function(event, ui){
            // console.log("Event: ", event);
            // console.log("UI: ", ui);
            console.log("Has soltado un elemento dentro");
        }
    });

    // Drop
    $('#elemento-movido').draggable();
    $('#area').droppable({
        drop: function(){
            console.log("Has soltado algo dentro del area");
        }
    });

    // Efectos
    $('#mostrar').click(function(){
        // $('.caja-efectos').toggle("fade");
        // $('.caja-efectos').fadeToggle();
        // $('.caja-efectos').effect("explode");
        // $('.caja-efectos').toggle("explode");
        // $('.caja-efectos').toggle("blind");
        // $('.caja-efectos').toggle("slide");
        // $('.caja-efectos').toggle("drop");
        // $('.caja-efectos').toggle("fold");
        // $('.caja-efectos').toggle("puff");
        // $('.caja-efectos').toggle("scale");
        // $('.caja-efectos').toggle("shake");
        // $('.caja-efectos').toggle("shake", "slow");
        // $('.caja-efectos').toggle("shake", 4000);
        $('.caja-efectos').toggle("shake", {}, 4000);
    });
});