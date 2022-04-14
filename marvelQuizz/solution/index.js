let botonJugas = document.querySelector(".jugas")
let titulo = document.querySelector("#titulo")
let secccionQuizz = document.querySelector(".quizz")
let divCategorias = document.querySelector(".categorias")
let contenedorPreguntas = document.querySelector(".contenedor__preguntas")
let botonesCategorias = document.querySelectorAll(".categorias > button")
let botonUCM = document.querySelector("#botonUCM")
let botonXMEN = document.querySelector("#botonXMEN")
let botonTODO = document.querySelector("#botonTODO")

contenedorPreguntas.classList.add("fadeOut")
divCategorias.classList.add("fadeOut")


// Se cliake el boton ¿JUGAS?
botonJugas.addEventListener("click", fadeOutInicial)
    //Se oculta ese boton, y la presentacion del Inicio
function fadeOutInicial() {
    botonJugas.classList.toggle("fadeOut")
    titulo.classList.toggle("fadeOut")
        // Se muestran las categorias para jugar
    divCategorias.classList.toggle("fadeOut")
}

function categorySelected(x){
    console.log(botonUCM.classList)
    switch (x) {
        case 1:
            botonXMEN.classList.toggle('fadeOut');
            botonTODO.classList.toggle('fadeOut');
            break;
    
        case 2:
            botonUCM.classList.toggle('fadeOut');
            botonTODO.classList.toggle('fadeOut');
            break;
    
        case 3:
            botonUCM.classList.toggle('fadeOut');
            botonXMEN.classList.toggle('fadeOut');
            break;
    
        default:
            break;
    }
}
