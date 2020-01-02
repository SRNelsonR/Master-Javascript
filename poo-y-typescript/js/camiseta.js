var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Decorador
function estampar(logo) {
    return function (target) {
        target.prototype.estampacion = function () {
            console.log("Camiseta estampada con el logo de: " + logo);
        };
    };
}
// Clase (Molde del objeto)
// @estampar('Gucci Gang')
/* export */ var Camiseta = /** @class */ (function () {
    // Metodos (Funciones o acciones del objeto)
    function Camiseta(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    return Camiseta;
}());
/* var camiseta = new Camiseta("Rojo", "Manga larga", "Nike", "L", 14);
// camiseta.setColor("Rojo");
// camiseta.getColor();

var playera = new Camiseta("Azul", "Manga corta", "Adidas", "L", 20);
// playera.setColor("Azul");
// console.log(camiseta.getColor(), playera);
console.log(camiseta, playera); */
var camiseta = new Camiseta("Rojo", "Manga larga", "Nike", "L", 14);
console.log(camiseta);
// camiseta.estampacion();
// Clase hija
var Sudadera = /** @class */ (function (_super) {
    __extends(Sudadera, _super);
    function Sudadera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sudadera.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    Sudadera.prototype.getCapucha = function () {
        return this.capucha;
    };
    return Sudadera;
}(Camiseta));
var sudadera_nike = new Sudadera("Rojo", "Manga larga", "Nike", "L", 14);
sudadera_nike.setCapucha(true);
sudadera_nike.setColor("Gris Jaspeado");
console.log(sudadera_nike);
