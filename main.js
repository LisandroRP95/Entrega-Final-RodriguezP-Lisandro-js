let promedioEdades = 1;
let suma = 0;
let lecturaCorrecta = false;

while (!lecturaCorrecta){
    cantidadPersonas = leerEntero("Ingrese cantidad de personas:");
    
    if(cantidadPersonas > 0){
        lecturaCorrecta = true;
    }
}

for(let i = 0; i < cantidadPersonas; i++){
    let edad = parseInt(prompt("Ingresar edad:"));
    suma = suma + edad;
}

promedioEdades = suma / cantidadPersonas;

alert(`El promedio de las edades ingresadas es: ${promedioEdades}`);

function leerEntero(message) {
    return parseInt(prompt(message));
}