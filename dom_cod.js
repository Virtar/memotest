/***************************************/
/*Ingresar nombre y apellido por PROMPT*/
/***************************************/
// Declarar listaalumnos como una variable global usando let
let listaalumnos = ["Laura", "Daniel", "Monica", "Susana", "Nahuel"];
//let nuevoalumno;
//let lastname;

// Esperar que el DOM esté completamente cargado antes de añadir los eventos
document.addEventListener('DOMContentLoaded', function() {
    // Solicitar nombre y apellido al usuario mediante ventanas emergentes
    nuevoalumno = prompt("Ingresa tu nombre.");
    lastname = prompt("Ingresa tu apellido.");
    
    // Verificar si el nombre ya existe en la lista
    // Si ya existe, muestra una alerta
    // Si no existe, agrega el nuevo nombre al array
    if (listaalumnos.includes(nuevoalumno)) {
        alert("El visitante ya está en la lista");
    } else {
        listaalumnos.push(nuevoalumno);
    }
    
    /*******************************************/
    /*Nombre ingresado en mensaje de bienvenida*/
    /*******************************************/
    let info = document.getElementById("infopag");
    info.textContent = `¡Bienvenido/a ${nuevoalumno}!`;
                                     
    let linkCountParagraph = document.createElement('p');
    let linkCount = document.getElementsByTagName('a').length;
    linkCountParagraph.textContent = `La cantidad de enlaces en esta página es: ${linkCount}`;
    // Agregar el párrafo al elemento de información
    info.appendChild(linkCountParagraph);

    /**************************************/
    /*Crear y añadir botones*/
    /**************************************/
    const botonAgregar = document.getElementById('bot1');
    //botonAgregar.addEventListener('click', añadirNombre);

    const botonRetirar = document.createElement('button');
    botonRetirar.textContent = 'Retirar Último Nombre';
    botonRetirar.onclick = retirarNombre;
    botonRetirar.classList.add('button');
    document.querySelector('.contenedor3').appendChild(botonRetirar);

    /*******************************************/
    /*Mostrar lista de nombres y configuraciones*/
    /*******************************************/
    const primerParrafo = document.getElementById('primerParrafo');
    primerParrafo.textContent = listaalumnos.join(', ');
    
    document.querySelectorAll('input[type="radio"]').forEach(button => {
        button.addEventListener('change', () => alert(`Se seleccionó la opción: ${button.value}`));
    });

    document.getElementById('compareButton').addEventListener('click', () => {
        let num1 = Number(document.getElementById('numero1').value);
        let num2 = Number(document.getElementById('numero2').value);
        alert(`El número mayor es: ${Math.max(num1, num2)}`);
    });

    document.getElementById('sumButton').addEventListener('click', () => {
        let num1 = Number(document.getElementById('num1').value);
        let num2 = Number(document.getElementById('num2').value);
        alert(`La suma es: ${num1 + num2}`);
    });
});

/*******************************************/
/*Añadir y retirar nombres de la lista*/
/*******************************************/
function añadirNombre() {
    const visitantesList = document.querySelector('.contenedor3 ul');
    const nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = `${nuevoalumno} ${lastname}`;
    visitantesList.appendChild(nuevoElemento);
}
        
function retirarNombre() {
    const visitantesList = document.querySelector('.contenedor3 ul');
    if (visitantesList.lastElementChild) {
        visitantesList.removeChild(visitantesList.lastElementChild);
    } else {
        alert("No hay más elementos para eliminar");
    }
}

/****************************************************/
/*Funciones para mostrar y ocultar contenido adicional*/
/****************************************************/
function muestra() {
    const elementoAdicional = document.getElementById('adicional');
    const enlaceLeerMenos = document.getElementById('leerMenos');
    elementoAdicional.classList.remove('oculto');
    elementoAdicional.classList.add('visible');
    enlaceLeerMenos.classList.remove('oculto');
    enlaceLeerMenos.classList.add('visible');
}

function ocultarSpan() {
    const elementoAdicional = document.getElementById('adicional');
    const enlaceLeerMenos = document.getElementById('leerMenos');
    elementoAdicional.classList.remove('visible');
    elementoAdicional.classList.add('oculto');
    enlaceLeerMenos.classList.remove('visible');
    enlaceLeerMenos.classList.add('oculto');
}

document.addEventListener('DOMContentLoaded', function() {
    
        // Crear contenedor para botones de radio
        const contenedorRadio = document.createElement('div');
        contenedorRadio.innerHTML = `
            <h3>Seleccione una opción:</h3>
            <label><input type="radio" name="opcion" value="Opción 1"> Opción 1</label><br>
            <label><input type="radio" name="opcion" value="Opción 2"> Opción 2</label><br>
        `;
        document.querySelector('.contenedor3').appendChild(contenedorRadio);
    
        // Seleccionar todos los botones de radio
        const radioButtons = document.querySelectorAll('input[type="radio"]');
    
        // Agregar un evento de cambio a cada botón de radio
        radioButtons.forEach(button => {
            button.addEventListener('change', () => {
                // Mostrar una alerta con el valor del botón seleccionado
                alert(`Se seleccionó la opción: ${button.value}`);
            });
        });
    
    
    // Crear contenedor para comparación de números
    const contenedorComparacion = document.createElement('div');
    contenedorComparacion.innerHTML = `
        <h3>Comparación de Números</h3>
        <input type="number" id="numero1" placeholder="Número 1">
        <input type="number" id="numero2" placeholder="Número 2">
        <button id="compareButton">Comparar</button>
    `;
    document.querySelector('.contenedor3').appendChild(contenedorComparacion);

    // Crear contenedor para suma de números
    const contenedorSuma = document.createElement('div');
    contenedorSuma.innerHTML = `
        <h3>Suma de Números</h3>
        <input type="number" id="num1" placeholder="Número 1">
        <input type="number" id="num2" placeholder="Número 2">
        <button id="sumButton">Sumar</button>
    `;
    document.querySelector('.contenedor3').appendChild(contenedorSuma);

    // Agregar funcionalidad al botón de comparar números
    document.getElementById('compareButton').addEventListener('click', () => {
        const num1 = Number(document.getElementById('numero1').value);
        const num2 = Number(document.getElementById('numero2').value);
        alert(`El número mayor es: ${Math.max(num1, num2)}`);
    });

    // Agregar funcionalidad al botón de suma de números
    document.getElementById('sumButton').addEventListener('click', () => {
        const num1 = Number(document.getElementById('num1').value);
        const num2 = Number(document.getElementById('num2').value);
        alert(`La suma es: ${num1 + num2}`);
    });
});
