// String
let cadena: string = "oscarnelsonweb.com";
console.log(cadena);

// cadena =12;

// number
let numero: number = 12;

// Boolean
let verdadero_falso: boolean = true;

// Any
let cualquiera: any = 77;

// Arrays
var lenguajes: Array<any> = ["PHP", "JS", "CSS", 2];

let years: number[] = [12, 13, 14];
        // asny[]

console.log(cadena, numero, verdadero_falso, cualquiera, lenguajes, years);

// Multiples tipos de datos
/* let muestra: string | number = "oscarweb.com";
muestra = 12;
console.log(muestra); */

// Creacion de tipos de datos
type letrasonumeros = string | number;
let letra: letrasonumeros = "oscarnelson"; // = letras, o numero
console.log(letra);

// Diferencias entre var y let = Alcance de lsa variables
//  Let vs var
var numero1 = 10;
var numero2 = 12;

if(numero1 == 10){
    let numero1 = 44;
    var numero2 = 55;
    console.log(numero1, numero2);
}
console.log(numero1, numero2);