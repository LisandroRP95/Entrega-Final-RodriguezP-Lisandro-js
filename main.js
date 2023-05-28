let listaPersonas = [];
let formulario = document.getElementById("formulario");
let borrarButton = document.getElementById("borrar");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;

    let newPersona = new Persona(nombre, parseInt(edad));
    listaPersonas.push(newPersona);

    actualizar();

});

borrarButton.addEventListener("click", function () {
    listaPersonas = [];
    actualizar();
});

function actualizar() {
    actualizarPromedio();
    actualizarListado();
}

function actualizarPromedio() {

    let promedio = 0;

    if (listaPersonas.length != 0) {

        for (const persona of listaPersonas) {
            promedio = promedio + persona.edad;
        }
        
        promedio = promedio / listaPersonas.length;
    }

    let htmlPromedioObject = document.getElementById("promedio");
    htmlPromedioObject.innerHTML = promedio;

}

function actualizarListado() {

    let htmlListaObject = document.getElementById("lista-personas");
    htmlListaObject.innerHTML = "";

    for (const persona of listaPersonas) {

        let nombre = persona.nombre;
        let edad = persona.edad;

        let divPersona = document.createElement("div");
        divPersona.classList.add("persona");

        if (persona.isMayorDeEdad()) {
            divPersona.classList.add("mayor");
        } else {
            divPersona.classList.add("menor");
        }

        divPersona.innerHTML = `<label for="">Nombre: </label>
                                <span>${nombre}</span>
                                <br>
                                <label for="">Edad: </label>
                                <span>${edad}</span>`;


        htmlListaObject.appendChild(divPersona);

    }

}

class Persona {

    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    isMayorDeEdad() {

        return (this.edad >= 18);

    }

}