let promedioEdades = 1;
let suma = 0;
let promedio = 0;
let cantidadPersonas;
let lecturaCorrecta = false;
let arrayPersonas = []
let div = document.getElementById("divPromedio");
let tituloPagina = document.getElementById("tituloPagina");
let cartelPersona = document.createElement("div");

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

    cartelPersona.innerHTML = `<div>
                                <h3>Nombre: ${persona.nombre}</h3>
                                <h3>Edad: ${persona.edad}</h3>
                                <hr />
                                </div>`;
    
    document.body.append(cartelPersona);

    suma = suma + persona.edad;
    
}

if (arrayPersonas.length > 0) {
    promedio = suma/arrayPersonas.length;
}

console.log(promedio);

promedioEdades = suma / cantidadPersonas;

alert(`El promedio de las edades ingresadas es: ${promedioEdades}`);
divPromedio.innerHTML = `<h2>El promedio de las edades ingresadas es: ${promedioEdades}</h2>`;

console.log(arrayPersonas);

let mayoresDeEdad = arrayPersonas.filter(Persona => Persona.edad > 18);

console.log("Los Mayores de edad son:");
console.log(mayoresDeEdad);

function leerEntero(message) {
    return parseInt(prompt(message));
}