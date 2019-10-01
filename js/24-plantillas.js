'use strict'

//Plantillas de texto

var nombre = prompt("Mete tu nombre");
var apellido = prompt("Mete tu apellido");

//var texto = "Tu nombre es: " + nombre + ". Tu apellido es: " + apellido;

var texto = `
    <h1>Hola que tal</h1>
    <h3>Mi nombre es: ${nombre}</h3>
    <h3>Mi apellido es: ${apellido}</h3>
`;

document.write(texto);