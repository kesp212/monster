let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3
let sectionSeleccionarMascota = []

function iniciarJuego(){
    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = "none"

    let sectionSeleccionarReiniciar = document.getElementById("boton-reiniciar")
    sectionSeleccionarReiniciar.style.display = "none"

    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener("click", ataqueAgua)
    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener("click", ataqueFuego)
    let botonTierra =document.getElementById("boton-tierra")
    botonTierra.addEventListener("click", ataqueTierra)

    let botonReiniciar = document.getElementById("boton-reiniciar")
    botonReiniciar.addEventListener("click", reiniciarJuego)

    sectionSeleccionarMascota = document.getElementsByClassName("tarjeta-de-monster")
    for (var i = 0; i < sectionSeleccionarMascota.length; i++) {
        sectionSeleccionarMascota[i].addEventListener("click", tarjetaSeleccionada);
    }
}


function tarjetaSeleccionada(element){
    console.log("METODO TARJETA SELECCIONADA", element)
    if (element.target.classList.contains("tarjeta-seleccionada-class")) {
        element.target.classList.remove("tarjeta-seleccionada-class")
    } else { 
        element.target.classList.add("tarjeta-seleccionada-class")
    }
}

function seleccionarMascotaJugador() {
    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = "flex"

    let sectionSeleccionarMascotaJugador = document.getElementById("seleccionar-mascota")
    sectionSeleccionarMascotaJugador.style.display = "none"


    let inputLire = document.getElementById('lire')
    let inputSuira = document.getElementById('suira')
    let inputCairo = document.getElementById('cairo')
    let inputRiuli = document.getElementById('riuli')
    let inputMaiuca = document.getElementById('maiuca')
    let inputPydos = document.getElementById('pydos')
    let spanMascotaJugador = document.getElementById("mascota-jugador")


    if(inputLire.checked) {
        spanMascotaJugador.innerHTML = "Lire"
    } else if (inputSuira.checked) {
        spanMascotaJugador.innerHTML = "Suira"
    } else if(inputCairo.checked) {
        spanMascotaJugador.innerHTML = "Cairo"
    } else if (inputRiuli.checked) {
        spanMascotaJugador.innerHTML = "Riuli"
    } else if (inputMaiuca.checked) {
        spanMascotaJugador.innerHTML = "Maiuca"
    } else if (inputPydos.checked) {
        spanMascotaJugador.innerHTML = "Pydos"
    }  else {
        sectionSeleccionarAtaque.style.display = "none"
        sectionSeleccionarMascotaJugador.style.display = "flex"
        alert("Selecciona una mascota")
    } 

    // seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(1,6)
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")


    if (mascotaAleatoria == 1 ){
        spanMascotaEnemigo.innerHTML = "Lire"
    } else if (mascotaAleatoria == 2 ) {
        spanMascotaEnemigo.innerHTML = "Suira"
    } else if (mascotaAleatoria == 3) {
        spanMascotaEnemigo.innerHTML = "Cairo"
    } else if (mascotaAleatoria == 4) {
        spanMascotaEnemigo.innerHTML = "Riuli"
    } else if (mascotaAleatoria == 5) {
        spanMascotaEnemigo.innerHTML = "Maiuca"
    } else {
        spanMascotaEnemigo.innerHTML = "Pydos"
    }
}

function ataqueAgua() {
    ataqueJugador = "AGUA"
    ataqueAleatorioEnemigo()
}
function ataqueFuego() {
    ataqueJugador = "FUEGO"
    ataqueAleatorioEnemigo()
}
function ataqueTierra() {
    ataqueJugador = "TIERRA"
    ataqueAleatorioEnemigo()
}
function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)
    
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = "AGUA"
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = "FUEGO"
    } else {
        ataqueEnemigo = "TIERRA"
        
    }

    combate()

}
    
function combate() {
    let spanVidasJugador = document.getElementById("vidas-jugador")
    let spanVidasEnemigo = document.getElementById("vidas-enemigo")

    if(ataqueEnemigo == ataqueJugador) {
        crearMensaje("EMPATE")
    } else if(ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA") {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == "AGUA" && ataqueEnemigo =="FUEGO") {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueEnemigo == "TIERRA" && ataqueEnemigo == "AGUA") {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else { 
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas()
}

function revisarVidas() {
    if (vidasEnemigo == 0) {
        crearMensajeFinal("FELICITACIONES! GANASTE🎊🥳")
    } else if (vidasJugador == 0) {
        crearMensajeFinal("TU PERDISTE!😜")
    }
}
function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById("mensajes")

    let parrafo = document.createElement("p")
    parrafo.innerHTML = "Tu mascota atacó con " + ataqueJugador +", la mascota del enemigo atacó con " + ataqueEnemigo + "- " + resultado
        
    sectionMensajes.appendChild(parrafo)
} 
function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById("mensajes")

    let parrafo = document.createElement("p")
    parrafo.innerHTML = resultadoFinal
        
    sectionMensajes.appendChild(parrafo)

    let botonAgua = document.getElementById("boton-agua")
    botonAgua.disabled = true
    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.disabled = true
    let botonTierra =document.getElementById("boton-tierra")
    botonTierra.disabled = true

    let sectionSeleccionarReiniciar = document.getElementById("boton-reiniciar")
    sectionSeleccionarReiniciar.style.display = "block" 

    let botonReiniciar = document.getElementById("boton-reiniciar")
    botonReiniciar.addEventListener("click", reiniciarJuego)
}

function reiniciarJuego() {
    location.reload()
}


    function aleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)


}




window.addEventListener('load', iniciarJuego)