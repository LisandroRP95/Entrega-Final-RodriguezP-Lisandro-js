let promedioEdades = 1;
let suma = 0;
let promedio = 0;
let cantidadPersonas;
let lecturaCorrecta = false;
let arrayPersonas = []

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
    console.log("Nombre: " + persona.nombre);
    console.log("Edad: " + persona.edad);

    suma = suma + persona.edad;
    
}

if (arrayPersonas.length > 0) {
    promedio = suma/arrayPersonas.length;
}

console.log(promedio);

promedioEdades = suma / cantidadPersonas;

alert(`El promedio de las edades ingresadas es: ${promedioEdades}`);

console.log(arrayPersonas);

let mayoresDeEdad = arrayPersonas.filter(Persona => Persona.edad > 18);

console.log(mayoresDeEdad);

function leerEntero(message) {
    return parseInt(prompt(message));
}