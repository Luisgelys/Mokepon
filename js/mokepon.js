const sectionElegirAtaque = document.getElementById('seleccion-ataque')
const btnMascotas = document.getElementById('btn-mascotas')
const btnFuego = document.getElementById('btn-fuego')
const btnAgua = document.getElementById('btn-agua')
const btnTierra = document.getElementById('btn-tierra')
const sectionReiniciar = document.getElementById('seccion-reiniciar')
const btnReiniciar = document.getElementById('btn-reiniciar')

const sectionElegirMascota = document.getElementById('seleccion-mascota')
const spanMascota = document.getElementById('tu-mascota')

const spanMascotaEnemiga = document.getElementById('mascota-enemiga')

const spanVidaJugador = document.getElementById('vida-jugador')
const spanVidaEnemigo = document.getElementById('vida-enemigo')

const sectionMensaje = document.getElementById('resultado')
const ataqueDelJugador = document.getElementById('ataque-jugador')
const ataqueDelEnemigo = document.getElementById('ataque-enemigo')
const contenedorTarjetas = document.getElementById('contenedor-tarjetas')

let mokepones = []
let opcionMokepon
let ataqueJugador
let ataqueEnemigo
let vidaJugador = 3
let vidaEnemigo = 3
let inputHipodoge
let inputCapipepo
let inputRatigueya
let mascotaJugador

class Mokepon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let hipodogue = new Mokepon('Hipodogue', 'img/mokepons_mokepon_hipodoge_attack.png', 5)
let capipepo = new Mokepon('Capipepo', 'img/mokepons_mokepon_capipepo_attack.png', 5)
let ratigueya = new Mokepon('Ratigueya', 'img/mokepons_mokepon_ratigueya_attack.png', 5)

hipodogue.ataques.push(
    { nombre: 'AGUA 💧', id: 'btn-agua' },
    { nombre: 'AGUA 💧', id: 'btn-agua' },
    { nombre: 'AGUA 💧', id: 'btn-agua' },
    { nombre: 'TIERRA 🌱', id: 'btn-tierra' },
    { nombre: 'FUEGO 🔥', id: 'btn-fuego' }
)

capipepo.ataques.push(
    { nombre: 'TIERRA 🌱', id: 'btn-tierra' },
    { nombre: 'TIERRA 🌱', id: 'btn-tierra' },
    { nombre: 'TIERRA 🌱', id: 'btn-tierra' },
    { nombre: 'AGUA 💧', id: 'btn-agua' },
    { nombre: 'FUEGO 🔥', id: 'btn-fuego' }
)

ratigueya.ataques.push(
    { nombre: 'FUEGO 🔥', id: 'btn-fuego' },
    { nombre: 'FUEGO 🔥', id: 'btn-fuego' },
    { nombre: 'FUEGO 🔥', id: 'btn-fuego' },
    { nombre: 'TIERRA 🌱', id: 'btn-tierra' },
    { nombre: 'AGUA 💧', id: 'btn-agua' }
)

mokepones.push(hipodogue, capipepo, ratigueya)

function iniciarJuego() {
    sectionElegirAtaque.style.display = 'none'

    mokepones.forEach((mokepon) => {
        opcionMokepon = `
            <input type="radio" name="mascota" id=${mokepon.nombre} />
            <label class="tarjeta-mokepon" for=${mokepon.nombre}>
                <p>${mokepon.nombre}</p>
                <img src=${mokepon.foto} alt=${mokepon.nombre}>
            </label>
        `;
        contenedorTarjetas.innerHTML += opcionMokepon;

        inputHipodoge = document.getElementById('Hipodogue')
        inputCapipepo = document.getElementById('Capipepo')
        inputRatigueya = document.getElementById('Ratigueya')
    });

    btnMascotas.addEventListener('click', seleccionarMascota)

    btnFuego.addEventListener('click', ataqueFuego)

    btnAgua.addEventListener('click', ataqueAgua)

    btnTierra.addEventListener('click', ataqueTierra)

    sectionReiniciar.style.display = 'none'

    btnReiniciar.addEventListener('click', reiniciar)
}

function seleccionarMascota() {
    sectionElegirMascota.style.display = 'none'
    sectionElegirAtaque.style.display = 'flex'

    if (inputHipodoge.checked) {
        spanMascota.innerHTML = inputHipodoge.id
        mascotaJugador = inputHipodoge.id
    } else if (inputCapipepo.checked) {
        spanMascota.innerHTML = inputCapipepo.id
        mascotaJugador = inputCapipepo.id
    } else if (inputRatigueya.checked) {
        spanMascota.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id
    } else {
        alert('Debes seleccionar una mascota')
    }

    extraerAtaque(mascotaJugador)

    seleccionarMascotaEnemigo()
}

function extraerAtaque(mascotaJugador) {
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            ataques = mokepones[i].ataques
        }
    }
    console.log(ataques) 
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(0, mokepones.length - 1)

    spanMascotaEnemiga.innerHTML = mokepones[mascotaAleatoria].nombre
    alert('El enemigo seleccionó a ' + mokepones[mascotaAleatoria].nombre)
}

function ataqueFuego() {
    ataqueJugador = 'FUEGO 🔥'
    alert('El ataque seleccionado es ' + ataqueJugador)

    seleccionarAtaqueEnemigo()
}

function ataqueAgua() {
    ataqueJugador = 'AGUA 💧'
    alert('El ataque seleccionado es ' + ataqueJugador)

    seleccionarAtaqueEnemigo()
}

function ataqueTierra() {
    ataqueJugador = 'TIERRA 🌱'
    alert('El ataque seleccionado es ' + ataqueJugador)

    seleccionarAtaqueEnemigo()
}

function seleccionarAtaqueEnemigo() {
    ataqueEnemigo = aleatorio(1, 3)

    if (ataqueEnemigo == 1) {
        ataqueEnemigo = 'FUEGO 🔥'
        alert('El ataque del enemigo es FUEGO 🔥')
    } else if (ataqueEnemigo == 2) {
        ataqueEnemigo = 'AGUA 💧'
        alert('El ataque del ememigo es AGUA 💧')
    } else {
        ataqueEnemigo = 'TIERRA 🌱'
        alert('El ataque del enemigo es TIERRA 🌱')
    }

    batalla()
}

function batalla() {

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
    } else if (ataqueJugador == 'AGUA 💧' && ataqueEnemigo == 'FUEGO 🔥') {
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

function revisarVidas() {
    if (vidaEnemigo == 0) {
        crearMensajeFinal('HAS GANADO')
    } else if (vidaJugador == 0) {
        crearMensajeFinal('EL ENEMIGO HA GANADO')
    }
}

function crearMensaje(resultadoBatalla) {

    sectionMensaje.innerHTML = resultadoBatalla
    let nuevoAtaqueJugador = document.createElement('p')
    nuevoAtaqueJugador.innerHTML = ataqueJugador
    let nuevoAtaqueEnemigo = document.createElement('p')
    nuevoAtaqueEnemigo.innerHTML = ataqueEnemigo

    ataqueDelJugador.appendChild(nuevoAtaqueJugador)
    ataqueDelEnemigo.appendChild(nuevoAtaqueEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    let parrafo = document.createElement('p')

    sectionMensaje.innerHTML = resultadoFinal

    btnFuego.disabled = true

    btnAgua.disabled = true

    btnTierra.disabled = true

    sectionReiniciar.style.display = 'block'
}

function reiniciar() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)
