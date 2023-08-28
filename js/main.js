const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

let resultadoMostrado = false; // Bandera para controlar si se mostró un resultado


botones.forEach(boton => {
    boton.addEventListener("click", () => {
        //console.log(boton.textContent); traemos al contenido textual del boton

        const botonApretado = boton.textContent;

        if (boton.id === "c") {
            pantalla.textContent = "0";
            resultadoMostrado = false;
            return; //esta funcion termina aqui (la funcion que ejecutamos con el addEventListener)
        }

        if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error!") {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1); //slice toma 2 numeros, el primero es desde la posicion que queremos arrancar y el segundo es hasta que numero tiene que cortar
            }
            resultadoMostrado = false;
            return;
        }

        if (boton.id === "igual") {
            try {
                pantalla.textContent = eval(pantalla.textContent); //evalua un conjunto de strings que tenga operaciones matematicas en una sola string

            } catch {
                pantalla.textContent = "Error!";
            }
            resultadoMostrado = true;
            return;
        }

        if (resultadoMostrado || pantalla.textContent === "0" || pantalla.textContent === "Error!") {
            pantalla.textContent = botonApretado;
            resultadoMostrado = false;
        }  else {
            pantalla.textContent += botonApretado; // += cuando apretemos cualquier boton se le va a ir sumando al textcontent de la pantalla
        }

    })
})

// Capturar teclas del teclado

document.addEventListener("keydown", event => {
    const key = event.key;

    if (/^[0-9+\-*=/.]$/.test(key)) {
        // Verificar si la tecla es un número, operador o símbolo válido
        if (resultadoMostrado) {
            pantalla.textContent = key; //si se mostro un resultado, reemplazar el contenudo de la pantalla con la tecla
            resultadoMostrado = false; //restablecer la bandera del resultado mostrado
        } else if (pantalla.textContent === "0" || pantalla.textContent === "Error!") {
            pantalla.textContent = key; // Si la pantalla muestra "0" o "Error!", reemplazar el contenido de la pantalla con la tecla
        } else {
            pantalla.textContent += key; // Si no se cumple ninguna de las condiciones anteriores, agregar la tecla al contenido existente de la pantalla
        }
    } else if (key === "Backspace") {
         // Verificar si la tecla presionada es "Backspace"
        if (pantalla.textContent.length === 1 || pantalla.textContent === "Error!") {
            pantalla.textContent = "0"; // Si la pantalla tiene un solo carácter o muestra "Error!", reiniciar la pantalla a "0"
        } else {
            pantalla.textContent = pantalla.textContent.slice(0, -1); // Si no, eliminar el último carácter del contenido de la pantalla
        }
        return;
    } else if (key === "Enter") {
        // Verificar si la tecla presionada es "Enter"
        try {
            pantalla.textContent = eval(pantalla.textContent); // Evaluar el contenido de la pantalla y mostrar el resultado
            resultadoMostrado = true; // Marcar que se mostró un resultado
        } catch {
            pantalla.textContent = "Error!";
        }
    }
});

