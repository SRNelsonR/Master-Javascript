'use strict'

/*
1. Pida 6 numeros por pantalla y los meta en un array
2. Mostrar el array entero (todos sus elementos) en el cuerpo de la pagina y en la consola
3. Ordenar y mostrarlo
4. Invertir su orden y mostrarlo
5. Mostrar cuantos elementos tienen el array
6. Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice (Se valorara el uso de funciones)
*/

function mostrarArray(elementos, textoCustom=""){
    document.write("<h1>Conetido del Array " + textoCustom + "</h1>");
    document.write("<ul>");
    elementos.forEach((elemento, index) => {
        document.write("<li>" + elemento + "</li>");
    });
    document.write("</ul>");
}

// var numeros = new Array(6);
var numeros = [];

// Pedir seis numeros
for(var i=0; i<=5; i++){
    // numeros[i] = parseInt(prompt("Introduce un numero", 0));
    numeros.push(parseInt(prompt("Introduce un numero", 0)));
}

// Mostrar en el cuerpo de la pagina
mostrarArray(numeros);
/* document.write("<h1>Conetido del Array</h1>");
numeros.forEach((numero, index) => {
    document.write("<strong>" + numero + "</strong><br/>");
}); */

// Mostrar el array por la console
console.log(numeros);

// Ordenar y Mostrar
numeros.sort(function(a, b){return a-b});
// console.log(numeros);
mostrarArray(numeros, "ordenados");

// Invertir y Mostrar
numeros.reverse();
mostrarArray(numeros, "invertido");

// Contar elementos
// console.log("Cantidad de elementos en el Array: " + numeros.length);
document.write("<h1>El Array tiene: " + numeros.length + " elementos</h1>");

// Busqueda
var busqueda = parseInt(prompt("Busca un numero", 0));  
var posicion = numeros.findIndex(numero => numero == busqueda);

if(posicion && posicion != -1){
    document.write("<hr/><h1>Encontrado</h1>");
    document.write("<h1>Posicion de la busqueda: " + posicion + "</h1><hr/>");
} else {
    document.write("<hr/><h1> No encontrado</h1><hr/>");
}