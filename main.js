let promedioEdades = 1;
let suma = 0;
let promedio = 0;
let cantidadPersonas;
let lecturaCorrecta = false;
let arrayPersonas = []

let div = document.getElementById("divPromedio");
let tituloPagina = document.getElementById("tituloPagina");

let formularioInicial = document.getElementById("formularioInicial");

formularioInicial.addEventListener("submit", validarFormulario);

function validarFormulario(e){
    e.preventDefault();
    let formulario = e.target
    console.log(formulario.children[0].value)
}

tituloPagina.className = "resaltador";

class Persona {

    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

}


while (!lecturaCorrecta){
    cantidadPersonas = leerEntero("Ingrese cantidad de personas:");
    
    if(cantidadPersonas > 0){
        lecturaCorrecta = true;
    }
}

for(let i = 0; i < cantidadPersonas; i++){
    let nombre = prompt("Ingrese nombre");
    let edad = parseInt(prompt("Ingresar edad:"));
    arrayPersonas.push(new Persona(nombre, edad));
}

for (let i = 0; i < arrayPersonas.length; i++) {
    const persona = arrayPersonas[i];

    console.log("----------------");
    console.log(`Nombre:  ${persona.nombre}`);
    console.log(`Edad:  ${persona.edad}`);

    suma = suma + persona.edad;
}

if (arrayPersonas.length > 0) {
    promedio = suma/arrayPersonas.length;
}

console.log(promedio);

promedioEdades = suma / cantidadPersonas;

for (const cartelPersona of arrayPersonas){
    let cartelPersona2 = document.createElement("div");
    
    cartelPersona2.innerHTML = `<div>
                                <h3>Nombre: ${cartelPersona.nombre}</h3>
                                <h3>Edad: ${cartelPersona.edad}</h3>
                                <hr />
                                </div>`;
    
    cartelPersona2.className = "listaPersona";

    document.body.append(cartelPersona2);
    }

divPromedio.innerHTML = `<h2>El promedio de las edades ingresadas es: ${promedioEdades}</h2>`;

console.log(arrayPersonas);

const mayoresDeEdad = arrayPersonas.filter(Persona => Persona.edad > 18);

console.log("Los Mayores de edad son:");
console.log(mayoresDeEdad);

for (const mayoresDeEdad2 of mayoresDeEdad){
let cuadroMayoresDeEdad = document.createElement("div");
cuadroMayoresDeEdad.innerHTML = `<div>
                                    <h3>Mayor de edad</h3>
                                    <h4>Nombre: ${mayoresDeEdad2.nombre}</h4>
                                    <h4>Edad: ${mayoresDeEdad2.edad}</h4>
                                    <hr />
                                 </div>`;

cuadroMayoresDeEdad.className = "mayoresDeEdad";

document.body.append(cuadroMayoresDeEdad);
}

function leerEntero(message) {
    return parseInt(prompt(message));
}