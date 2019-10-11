'use strict';

// Fetch (ajax) y peticiones a servicios / apis rest
var div_usuarios = document.querySelector('#usuarios');
var div_janet = document.querySelector('#janet');
var div_profesor = document.querySelector('#profesor');


getUsuarios()
.then(data => data.json()) // == data => { return data.json() } == function(data){ return data.json() }
.then(users => {
    listadoUsuarios(users.data);
    return getInfo();
})
.then(data => {
    div_profesor.innerHTML = data;
    return getJanet();
})
.then(data => data.json())
.then(user => {
    mostratJanet(user.data);
})
.catch(error => {
    alert("Error en las peticiones");
});

function getUsuarios(){
    // fetch('/api/users/2');
    return fetch('https://reqres.in/api/users');
}

function getJanet(){
    // fetch('/api/users/2');
    return fetch('https://reqres.in/api/users/2');
}

function getInfo(){
    var profesor = {
        nombre: "Oscar",
        apellidos: "Nelson",
        url: "https://oscarweb.com"
    };

    return new Promise((resolve, reject) => {    
        var profesor_string;
        
        setTimeout(function(){
            profesor_string = JSON.stringify(profesor);
            if(typeof profesor_string != 'string' || profesor_string == '') return reject('error en la promesa');

            return resolve(profesor_string);
        }, 3000);
    });
}

function listadoUsuarios(usuarios){
    usuarios.map((user, i) => { // Map lo mismo que el forEach
        let nombre = document.createElement('h3');
        nombre.innerHTML = (i+1) + ". " + user.first_name + " " + user.last_name;
        div_usuarios.appendChild(nombre);
        document.querySelector('.loading').style.display = 'none';
    });
}

function mostratJanet(user){
    let nombre = document.createElement('h4');
    let avatar = document.createElement('img');
    nombre.innerHTML = user.first_name + " " + user.last_name;
    avatar.src = user.avatar;
    avatar.width = '100';
    div_janet.appendChild(nombre);
    div_janet.appendChild(avatar);
    document.querySelector('#janet .loading').style.display = 'none';
}