$(document).ready(function(){
    // Slider
    if(window.location.href.indexOf('index') > -1){
        $('.galeria').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200
        });
    }

    // Posts
    if(window.location.href.indexOf('index') > -1){
        var posts = [
            {
                title: 'Prueba de titulo 1',
                date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam feugiat nisl id enim sodales suscipit. Morbi auctor nisi est, et accumsan est pellentesque vitae. Integer auctor laoreet arcu sit amet bibendum. Etiam consectetur lacus et enim viverra, at tempus felis bibendum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas ut pharetra sem, non faucibus odio. Morbi nec diam vitae massa blandit consectetur. Sed a lacus ut leo volutpat dignissim et vitae neque. Nulla porttitor ultricies sapien, nec lacinia turpis ultrices non. Mauris ornare nulla condimentum, gravida massa ut, posuere enim. Morbi dignissim hendrerit venenatis.'
            },
            {
                title: 'Prueba de titulo 2',
                date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam feugiat nisl id enim sodales suscipit. Morbi auctor nisi est, et accumsan est pellentesque vitae. Integer auctor laoreet arcu sit amet bibendum. Etiam consectetur lacus et enim viverra, at tempus felis bibendum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas ut pharetra sem, non faucibus odio. Morbi nec diam vitae massa blandit consectetur. Sed a lacus ut leo volutpat dignissim et vitae neque. Nulla porttitor ultricies sapien, nec lacinia turpis ultrices non. Mauris ornare nulla condimentum, gravida massa ut, posuere enim. Morbi dignissim hendrerit venenatis.'
            },
            {
                title: 'Prueba de titulo 3',
                date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam feugiat nisl id enim sodales suscipit. Morbi auctor nisi est, et accumsan est pellentesque vitae. Integer auctor laoreet arcu sit amet bibendum. Etiam consectetur lacus et enim viverra, at tempus felis bibendum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas ut pharetra sem, non faucibus odio. Morbi nec diam vitae massa blandit consectetur. Sed a lacus ut leo volutpat dignissim et vitae neque. Nulla porttitor ultricies sapien, nec lacinia turpis ultrices non. Mauris ornare nulla condimentum, gravida massa ut, posuere enim. Morbi dignissim hendrerit venenatis.'
            },
            {
                title: 'Prueba de titulo 4',
                date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam feugiat nisl id enim sodales suscipit. Morbi auctor nisi est, et accumsan est pellentesque vitae. Integer auctor laoreet arcu sit amet bibendum. Etiam consectetur lacus et enim viverra, at tempus felis bibendum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas ut pharetra sem, non faucibus odio. Morbi nec diam vitae massa blandit consectetur. Sed a lacus ut leo volutpat dignissim et vitae neque. Nulla porttitor ultricies sapien, nec lacinia turpis ultrices non. Mauris ornare nulla condimentum, gravida massa ut, posuere enim. Morbi dignissim hendrerit venenatis.'
            },
            {
                title: 'Prueba de titulo 5',
                date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam feugiat nisl id enim sodales suscipit. Morbi auctor nisi est, et accumsan est pellentesque vitae. Integer auctor laoreet arcu sit amet bibendum. Etiam consectetur lacus et enim viverra, at tempus felis bibendum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas ut pharetra sem, non faucibus odio. Morbi nec diam vitae massa blandit consectetur. Sed a lacus ut leo volutpat dignissim et vitae neque. Nulla porttitor ultricies sapien, nec lacinia turpis ultrices non. Mauris ornare nulla condimentum, gravida massa ut, posuere enim. Morbi dignissim hendrerit venenatis.'
            },
            {
                title: 'Prueba de titulo 6',
                date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam feugiat nisl id enim sodales suscipit. Morbi auctor nisi est, et accumsan est pellentesque vitae. Integer auctor laoreet arcu sit amet bibendum. Etiam consectetur lacus et enim viverra, at tempus felis bibendum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas ut pharetra sem, non faucibus odio. Morbi nec diam vitae massa blandit consectetur. Sed a lacus ut leo volutpat dignissim et vitae neque. Nulla porttitor ultricies sapien, nec lacinia turpis ultrices non. Mauris ornare nulla condimentum, gravida massa ut, posuere enim. Morbi dignissim hendrerit venenatis.'
            },
        ];

        posts.forEach((item, index) => {
            var post = 
                `
                    <article class="post">
                        <h2>${item.title}</h2>
                        <span class="date">${item.date}</span>
                        <p>
                            ${item.content}
                        </p>
                        <a href="#" class="buttom-more">Leer mas</a>
                    </article> 
                `;
            $("#posts").append(post);
        });
    }

    // Selector de tema
    var theme = $("#theme");
    $("#to-green").click(function(){
        theme.attr("href", "css/green.css");
    });
    $("#to-red").click(function(){
        theme.attr("href", "css/red.css");
    });
    $("#to-blue").click(function(){
        theme.attr("href", "css/blue.css");
    });

    // Scroll arriba de la web
    $('.subir').click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 500);

        return false;
    });

    // Login falso
    $("#login form").submit(function(){
        var form_name = $("#form_name").val();
        localStorage.setItem("form_name", form_name);
        location.reload();
    });

    var form_name = localStorage.getItem("form_name");
    if(form_name != null && form_name != undefined){
        var about_parrafo = $("#about p");

        $("#about p").html("<br><strong>Bienvenido, " + form_name + "</strong>");
        about_parrafo.append("<a href='#' id='logout'>Cerrar sesion</a>");

        $("#login").hide();

        $('#logout').click(function(){
            localStorage.clear();
            location.reload();
        });
    }

    // Acordeon
    if(window.location.href.indexOf('about') > -1){
        $("#acordeon").accordion();
    }

    // Reloj
    if(window.location.href.indexOf('reloj') > -1){
        setInterval(function(){
            var reloj = moment().format("hh:mm:ss");
            $("#reloj").html(reloj);
            console.log("Corriendo");
        }, 1000);
    }

    // Validacion
    if(window.location.href.indexOf('contact') > -1){
        $("form input[name='date']").datepicker({
            dateFormat: 'dd-mm-yy'
        });
        $.validate({
            lang: 'es',
            errorMessagePosition: 'top',
            scrollToTopOnError: true
        });
    }

});