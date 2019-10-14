$(document).ready(function(){
    // console.log($('a').length)
    reloadLinks();

    $('#add_button')
    .removeAttr('disabled')
    .click(function(){
        // $('#menu').append('<li><a href="' + $("#add_link").val() + '">' + $("#add_link").val() + '</a></li>');
        $('#menu').prepend('<li><a href="' + $("#add_link").val() + '">' + $("#add_link").val() + '</a></li>');
        $("#add_link").val('');
        // $('#menu').before('<li><a href="' + $("#add_link").val() + '">' + $("#add_link").val() + '</a></li>');
        reloadLinks();
    });
});

function reloadLinks(){
    $('a').each(function(index){
        // console.log($(this));
        var that = $(this);
        var enlace = that.attr("href");
        that.attr('target', '_blank');
        // that.removeAttr('target', '_blank');
        that.text(enlace);
    });
}