let ataqueJugador 
let ataqueEnemigo
let vidaJugador = 3
let vidaEnemigo = 3

function iniciarJuego () {
    let sectionElegirAtaque = document.getElementById('seleccion-ataque')
    sectionElegirAtaque.style.display = 'none'


    let btnMascotas = document.getElementById('btn-mascotas')
    btnMascotas.addEventListener('click', seleccionarMascota)

    let btnFuego = document.getElementById('btn-fuego')
    btnFuego.addEventListener('click', ataqueFuego)

    let btnAgua = document.getElementById('btn-agua')
    btnAgua.addEventListener('click', ataqueAgua)

    let btnTierra = document.getElementById('btn-tierra')
    btnTierra.addEventListener('click', ataqueTierra)

    let sectionReiniciar = document.getElementById('seccion-reiniciar')
    sectionReiniciar.style.display = 'none'

    let btnReiniciar = document.getElementById('btn-reiniciar')
    btnReiniciar.addEventListener('click', reiniciar)

}

function seleccionarMascota () {

    let sectionElegirMascota = document.getElementById('seleccion-mascota')
    sectionElegirMascota.style.display = 'none'

    let sectionElegirAtaque = document.getElementById('seleccion-ataque')
    sectionElegirAtaque.style.display = 'flex'

    let inputHipodoge = document.getElementById('hipodogue')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let spanMascota = document.getElementById('tu-mascota')

    if (inputHipodoge.checked) {
        spanMascota.innerHTML = 'Hipodogue'
    } else if (inputCapipepo.checked){
        spanMascota.innerHTML = 'Capipepo'
    } else if (inputRatigueya.checked) {
        spanMascota.innerHTML = 'Ratigueya'
    } else {
        alert ('Debes seleccionar una mascota')
    }

    seleccionarMascotaEnemigo () 
}

function seleccionarMascotaEnemigo () {
    let mascotaAleatoria = aleatorio(1,3)
    let spanMascotaEnemiga = document.getElementById ('mascota-enemiga')

    if (mascotaAleatoria == 1) {
        spanMascotaEnemiga.innerHTML = 'Hipodogue'
        alert ('El enemigo seleccionó a Hipodogue')
    } else if (mascotaAleatoria == 2) {
        spanMascotaEnemiga.innerHTML = 'Capipepo'
        alert ('El enemigo seleccionó a Capipepo')
    } else {
        spanMascotaEnemiga.innerHTML = 'Ratigueya'
        alert ('El enemigo seleccionó a Ratigueya')
    }
}

function ataqueFuego () {
    ataqueJugador = 'FUEGO 🔥'
    alert ('El ataque seleccionado es '+ataqueJugador)

    seleccionarAtaqueEnemigo ()
}

function ataqueAgua () {
    ataqueJugador = 'AGUA 💧'
    alert ('El ataque seleccionado es '+ataqueJugador)

    seleccionarAtaqueEnemigo ()
}

function ataqueTierra () {
    ataqueJugador = 'TIERRA 🌱'
    alert ('El ataque seleccionado es '+ataqueJugador)
    
    seleccionarAtaqueEnemigo ()
}

function seleccionarAtaqueEnemigo () {
    ataqueEnemigo = aleatorio (1, 3)

    if (ataqueEnemigo == 1) {
        ataqueEnemigo = 'FUEGO 🔥'
        alert ('El ataque del enemigo es FUEGO 🔥')
    } else if (ataqueEnemigo == 2) {
        ataqueEnemigo = 'AGUA 💧'
        alert ('El ataque del ememigo es AGUA 💧')
    } else {
        ataqueEnemigo = 'TIERRA 🌱'
        alert ('El ataque del enemigo es TIERRA 🌱')
    }

    batalla ()

}

function batalla () {
    let spanVidaJugador = document.getElementById('vida-jugador')
    let spanVidaEnemigo = document.getElementById('vida-enemigo')

    if (ataqueJugador == ataqueEnemigo) {
        crearMensaje('EMPATASTE')
    } else if (ataqueJugador == 'FUEGO 🔥' && ataqueEnemigo == 'TIERRA 🌱') {
        crearMensaje('GANASTE')
        vidaEnemigo--
        spanVidaEnemigo.innerHTML = vidaEnemigo
    } else if (ataqueJugador == 'TIERRA 🌱' && ataqueEnemigo == 'AGUA 💧') {
        crearMensaje('GANASTE')
        vidaEnemigo--
        spanVidaEnemigo.innerHTML = vidaEnemigo
    } else if (ataqueJugador == 'AGUA 💧' && ataqueEnemigo == 'FUEGO 🔥'){ 
        crearMensaje('GANASTE')
        vidaEnemigo--
        spanVidaEnemigo.innerHTML = vidaEnemigo
    } else {
        crearMensaje('PERDISTE')
        vidaJugador--
        spanVidaJugador.innerHTML = vidaJugador
    }

    revisarVidas()
}

function revisarVidas () {
    if (vidaEnemigo == 0) {
        crearMensajeFinal ('HAS GANADO')
    } else if (vidaJugador == 0) {
        crearMensajeFinal ('EL ENEMIGO HA GANADO')
    }
}

function crearMensaje (resultadoBatalla) {
    let sectionMensaje = document.getElementById('resultado')
    let ataqueDelJugador= document.getElementById('ataque-jugador')
    let ataqueDelEnemigo = document.getElementById('ataque-enemigo')

    sectionMensaje.innerHTML= resultadoBatalla
    let nuevoAtaqueJugador = document.createElement('p')
    nuevoAtaqueJugador.innerHTML= ataqueJugador
    let nuevoAtaqueEnemigo = document.createElement('p')
    nuevoAtaqueEnemigo.innerHTML = ataqueEnemigo

    ataqueDelJugador.appendChild(nuevoAtaqueJugador)
    ataqueDelEnemigo.appendChild(nuevoAtaqueEnemigo)
}

function crearMensajeFinal (resultadoFinal) {
    let sectionMensaje = document.getElementById('resultado')
    let parrafo = document.createElement('p')
    
    sectionMensaje.innerHTML = resultadoFinal

    let btnFuego = document.getElementById('btn-fuego')
    btnFuego.disabled = true

    let btnAgua = document.getElementById('btn-agua')
    btnAgua.disabled = true

    let btnTierra = document.getElementById('btn-tierra')
    btnTierra.disabled = true

    let sectionReiniciar = document.getElementById('seccion-reiniciar')
    sectionReiniciar.style.display = 'block'
}

function reiniciar () {
    location.reload()
}

function aleatorio (min, max) {
    return Math.floor (Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)
