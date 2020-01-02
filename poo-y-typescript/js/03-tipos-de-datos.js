// String
var cadena = "oscarnelsonweb.com";
console.log(cadena);
// cadena =12;
// number
var numero = 12;
// Boolean
var verdadero_falso = true;
// Any
var cualquiera = 77;
// Arrays
var lenguajes = ["PHP", "JS", "CSS", 2];
var years = [12, 13, 14];
// asny[]
console.log(cadena, numero, verdadero_falso, cualquiera, lenguajes, years);
var letra = "oscarnelson"; // = letras, o numero
console.log(letra);
// Diferencias entre var y let = Alcance de lsa variables
//  Let vs var
var numero1 = 10;
var numero2 = 12;
if (numero1 == 10) {
    var numero1_1 = 44;
    var numero2 = 55;
    console.log(numero1_1, numero2);
}
console.log(numero1, numero2);
