import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html'
})

export class ZapatillasComponent implements OnInit{
    public titulo: string = "Componente de Zapatillas";
    public zapatillas: Array<Zapatilla>;
    public marcas: String[];
    public color: string;

    constructor(){
        this.color = 'yellow';
        this.marcas = new Array();
        this.zapatillas = [
            new Zapatilla('Nike Airmax', 'Nike', 'Rojas', 40, true),
            new Zapatilla('Reebok Classic', 'Reebok', 'Blanco', 80, true),
            new Zapatilla('Reebok Spartan', 'Reebok', 'Negra', 180, true),
            new Zapatilla('Nike Runner MD', 'Nike', 'Negro', 60, true),
            new Zapatilla('Adiddas Yezzy', 'Addidas', 'Gris', 180, false)
        ];
    }

    ngOnInit(){
        console.log(this.zapatillas);
        this.getMarcas();
    }

    getMarcas(){
        this.zapatillas.forEach((zapatilla, index) => {
            if(this.marcas.indexOf(zapatilla.marca) < 0){ //this.marcas.indexOf(zapatilla.marca)
                this.marcas.push(zapatilla.marca);
            }
            // consol*e.log(index);
        });
        console.log(this.marcas);
    }
}