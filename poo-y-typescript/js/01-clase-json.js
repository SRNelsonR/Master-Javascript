var bicicleta = {
    color: 'Rojo',
    modelo: 'BMX',
    frenos: 'De disco',
    velocidadMaxima: '60Km',
    cambiaColor: function(nuevo_color){
        // bicicleta.color = nuevo_color;
        this.color = nuevo_color;
        console.log(this);
    }
};

bicicleta.cambiaColor("Azul");