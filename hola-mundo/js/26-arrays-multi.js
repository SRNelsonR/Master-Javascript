'use strict'

var categorias = ['Accion', 'Terror', 'Comedia'];
var peliculas = ['La verdad duele', 'La vida es bella', 'Gran Torino'];

// Ordenar
// peliculas.sort();
// Ordenar al reves
peliculas.reverse();

console.log(peliculas);

var cine = [categorias, peliculas];

// console.log(cine[0][1]);
// console.log(cine[1][2]);

/* var elemento = "";

do{
    elemento = prompt("Introduce tu pelicula: ");
    peliculas.push(elemento);
}while(elemento != "ACABAR"); */

/* peliculas .pop();
peliculas .pop();
peliculas .pop(); */
// peliculas[0] = undefined;

var indice = peliculas.indexOf("Gran Torino");
console.log(indice);

if(indice > -1){
    peliculas.splice(indice, 1);
}

var peliculas_string = peliculas.join();//Convertir arrray a string

var cadena = "texto1, texto2, texto3";
var cadena_array = cadena.split(", ");

console.log(cadena_array);