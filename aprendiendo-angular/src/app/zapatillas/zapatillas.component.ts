import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';
import { ZapatillasService } from '../services/zapatilla.service';

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html',
    providers: [ZapatillasService]
})

export class ZapatillasComponent implements OnInit{
    public titulo: string = "Componente de Zapatillas";
    public zapatillas: Array<Zapatilla>;
    public marcas: String[];
    public color: string;
    public mi_marca: string;

    constructor(
        private _zapatillaService: ZapatillasService
    ){
        this.mi_marca = "Fila";
        this.color = 'yellow';
        this.marcas = new Array();
        
    }

    ngOnInit(){
        // console.log(this.zapatillas);
        this.zapatillas = this._zapatillaService.getZapatillas();
        // alert(this._zapatillaService.getTexto());
        this.getMarcas();
    }

    getMarcas(){
        this.zapatillas.forEach((zapatilla, index) => {
            if(this.marcas.indexOf(zapatilla.marca) < 0){ //this.marcas.indexOf(zapatilla.marca)
                this.marcas.push(zapatilla.marca);
            }
            // console.log(index);
        });
        // console.log(this.marcas);
    }

    getMarca(){
        alert(this.mi_marca);
    }

    addMarca(){
        this.marcas.push(this.mi_marca);
    }

    borrarMarca(index){
        // delete this.marcas[index];
        this.marcas.splice(index, 1);
    }

    onBlur(){
        console.log('Has salido del input');
    }

    mostrarPalabra(){
        alert(this.mi_marca);
    }
}