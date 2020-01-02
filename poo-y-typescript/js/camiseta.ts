// Interface
interface CamisetaBase{
    setColor(color);
    getColor(color);
}

// Decorador
function estampar(logo: string){
    return function(target: Function){
        target.prototype.estampacion = function():void{
            console.log("Camiseta estampada con el logo de: " + logo);
        }
    }
}

// Clase (Molde del objeto)
// @estampar('Gucci Gang')
/* export */ class Camiseta implements CamisetaBase {
    // Propiedades (Caracteristicas del objeto)
    private color: string;
    private modelo: string;
    private marca: string;
    private talla: string;
    private precio: number;

    // Metodos (Funciones o acciones del objeto)
    constructor( color, modelo, marca, talla, precio){
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }

    public setColor(color){
        this.color = color;
    }
    public getColor(){
        return this.color;
    }
}
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
class Sudadera extends Camiseta {
    private capucha: boolean;

    setCapucha(capucha: boolean){
        this.capucha = capucha;
    }
    getCapucha(): boolean{
        return this.capucha;
    }
}

var sudadera_nike = new Sudadera("Rojo", "Manga larga", "Nike", "L", 14);
sudadera_nike.setCapucha(true);
sudadera_nike.setColor("Gris Jaspeado");
console.log(sudadera_nike);