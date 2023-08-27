const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        //console.log(boton.textContent); traemos al contenido textual del boton

        const botonApretado = boton.textContent;

        if (boton.id === "c") {
            pantalla.textContent = "0";
            return; //esta funcion termina aqui (la funcion que ejecutamos con el addEventListener)
        }

        if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error!") {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1); //slice toma 2 numeros, el primero es desde la posicion que queremos arrancar y el segundo es hasta que numero tiene que cortar
            }
            return;
        }

        if (boton.id === "igual") {
            try {
                pantalla.textContent = eval(pantalla.textContent); //evalua un conjunto de strings que tenga operaciones matematicas en una sola string

            } catch {
                pantalla.textContent = "Error!";
            }
            return;
        }

        if (pantalla.textContent === "0" || pantalla.textContent === "Error!") {
            pantalla.textContent = botonApretado;
        } else {
            pantalla.textContent += botonApretado; // += cuando apretemos cualquier boton se le va a ir sumando al textcontent de la pantalla
        }

    })
})