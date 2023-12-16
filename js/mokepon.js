let ataqueJugador 
let ataqueEnemigo
let resultadoBatalla 

function iniciarJuego () {
    let btnMascotas = document.getElementById('btn-mascotas')
    btnMascotas.addEventListener('click', seleccionarMascota)

    let btnFuego = document.getElementById('btn-fuego')
    btnFuego.addEventListener('click', ataqueFuego)

    let btnAgua = document.getElementById('btn-agua')
    btnAgua.addEventListener('click', ataqueAgua)

    let btnTierra = document.getElementById('btn-tierra')
    btnTierra.addEventListener('click', ataqueTierra)
}

function seleccionarMascota () {
    let inputHipodoge = document.getElementById('hipodogue')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let spanMascota = document.getElementById('tu-mascota')

    if (inputHipodoge.checked) {
        spanMascota.innerHTML = 'Hipodogue'
        alert ('Seleccionaste a Hipodogue')
    } else if (inputCapipepo.checked){
        spanMascota.innerHTML = 'Capipepo'
        alert ('Seleccionaste a Capipepo')
    } else if (inputRatigueya.checked) {
        spanMascota.innerHTML = 'Ratigueya'
        alert ('Seleccionaste a Ratigueya')
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
    if (ataqueJugador == ataqueEnemigo) {
        crearMensaje('EMPATASTE')
    } else if (ataqueJugador == 'FUEGO 🔥' && ataqueEnemigo == 'TIERRA 🌱') {
        crearMensaje('GANASTE')
    } else if (ataqueEnemigo == 'TIERRA 🌱' && ataqueJugador == 'AGUA 💧') {
        crearMensaje('GANASTE')
    } else if (ataqueEnemigo == 'AGUA 💧' && ataqueJugador == 'FUEGO 🔥'){ 
        crearMensaje('GANASTE')
    } else {
        crearMensaje('PERDISTE')
    }
}

function crearMensaje (resultadoBatalla) {
    let sectionMensaje = document.getElementById('mensaje')
    let parrafo = document.createElement('p')
    
    parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador + ', la mascota de tu enemigo atacó con ' + ataqueEnemigo + ' ' + resultadoBatalla
    
    sectionMensaje.appendChild(parrafo)
}

function aleatorio (min, max) {
    return Math.floor (Math.random() * (max - min + 1) + min)
}


window.addEventListener('load', iniciarJuego)
