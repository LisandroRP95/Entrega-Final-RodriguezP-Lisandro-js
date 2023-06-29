let listaPersonas = [];
let formulario = document.getElementById("formulario");
let borrarButton = document.getElementById("borrar");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  let persona = getPersonaFromForm();

  enviarPersonaABackend(persona);

  addPersona(persona);

  // Agrego a local y session storage
  let listaPersonasJSON = JSON.stringify(listaPersonas);

  localStorage.setItem("listaPersonasServidorLocal", listaPersonasJSON);
  sessionStorage.setItem("listaPersonasServidorSession", listaPersonasJSON);

  let listaPersonasJSON2 = JSON.parse(
    localStorage.getItem("listaPersonasServidorLocal")
  );

  console.log(listaPersonasJSON2);
});

function getPersonaFromForm() {
  let nombre = document.getElementById("nombre").value;
  let edad = document.getElementById("edad").value;
  return new Persona(nombre, parseInt(edad));
}

function enviarPersonaABackend(persona) {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: persona.nombre,
      body: persona.edad,
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      Swal.fire({
        icon: "success",
        title: "Persona creada correctamente!",
        text: `Nombre: ${nombre.value} Edad: ${edad.value}`,
      });
      console.log(JSON.stringify(json));
    });
}

function addPersona(persona) {
  listaPersonas.push(persona);
  actualizar();
}

borrarButton.addEventListener("click", function () {
  listaPersonas = [];
  actualizar();

  Swal.fire({
    icon: "success",
    title: "Perfecto!",
    text: "La lista de personas ha sido borrada!",
  });
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
    return this.edad >= 18;
  }
}
