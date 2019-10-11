'use strict'

// Localstorage

// Comprobar disponibilidad del Localstorage
if(typeof(Storage) !== 'undefined'){
    console.log("Localstorage disponible");
} else{
    console.log("Incompatible Localstorage");
}

// Guarar datos
localStorage.setItem("titulo", "Curso de Symfony de yo");

// Recuperar elemento
document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");

// Guardar objetos
var usuario = {
    nombre: "Oscar Nelson",
    email: "oscar@gmail.com",
    web: "oscarweb.com"
};

localStorage.setItem("usuario", JSON.stringify(usuario));

// Recuperar objeto
localStorage.getItem("usuario")
var userjs = JSON.parse(localStorage.getItem("usuario"));
console.log(userjs);
document.querySelector("#datos").append(userjs.web + " - " + userjs.nombre);

// var objeto = JSON.parse(localStorage.getItem("usuario"));
// console.log("Nombre: ", objeto.nombre);

// Remover un Item del localstorage
// localStorage.removeItem("usuario");

// Remover todos los datos del localstorage
localStorage.clear();