'use strict'

// Arrays, Arreglos, Matrices

var nombre = "Oscar Nelson";
var nombres = ["Oscar Nelson", "Juan Lopez", "Manolo Garcia", "Jose Martin", 52, true];

var lenguajes = new Array("PHP", "JS", "Go", "Java", "C#", "C", "Pascal");

//console.log(nombres[5]);
//console.log(lenguajes);

//console.log(nombres.length);
/* var elemento = parseInt(prompt("Que elemento del array quieres?", 0));
if(elemento >= nombres.length){
    alert("Introduce el numero correcto menor que " + nombres.length);
} else{
    alert("El usuario seleccionado es: " + nombres[elemento]);
} */

// alert(nombres[elemento]);

document.write("<h1>Lenguajes de programacion del 2018</h1>");
/* document.write(lenguajes[0]);
document.write(lenguajes[1]);
document.write(lenguajes[2]); */
document.write("<ul>");
/* for(var i=0; i<lenguajes.length; i++){
    document.write("<li>" + lenguajes[i] + "</li>");
} */

lenguajes.forEach((elemento, index, data) => {
    document.write("<li>" +index + " - " + elemento + "</li>");
    console.log(data);
});

document.write("</ul>");