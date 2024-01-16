const sectionElegirAtaque = document.getElementById('seleccion-ataque')
const btnMascotas = document.getElementById('btn-mascotas')
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
const seccionAtaques = document.getElementById('seccion-ataques')

let mokepones = []
let opcionMokepon
let ataqueJugador = []
let ataqueEnemigo = []
let vidaJugador = 3
let vidaEnemigo = 3
let inputHipodoge
let ataquesMokeponEnemigo
let inputCapipepo
let inputRatigueya
let mascotaJugador
let opcionAtaques
let btnAgua
let btnTierra
let btnFuego
let botones = []
let ataqueAleatorio
let indexJugador
let indexEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0

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
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {

    ataques.forEach((ataque) => {
        opcionAtaques = `
        <button class="btn-ataques btAtaque" id=${ataque.id}>${ataque.nombre}</button>
        `;
        seccionAtaques.innerHTML += opcionAtaques;
    })

    botones = document.querySelectorAll('.btAtaque')

    btnFuego = document.getElementById('btn-fuego')
    btnAgua = document.getElementById('btn-agua')
    btnTierra = document.getElementById('btn-tierra')

}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(0, mokepones.length - 1)

    spanMascotaEnemiga.innerHTML = mokepones[mascotaAleatoria].nombre
    ataquesMokeponEnemigo = mokepones[mascotaAleatoria].ataques
    alert('El enemigo seleccionó a ' + mokepones[mascotaAleatoria].nombre)

    secuenciaAtaques()

}

function secuenciaAtaques() {

    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            if (e.target.textContent === 'AGUA 💧') {
                ataqueJugador.push('AGUA 💧')
                boton.disabled = true
            } else if (e.target.textContent === 'FUEGO 🔥') {
                ataqueJugador.push('FUEGO 🔥')
                boton.disabled = true
            } else {
                ataqueJugador.push('TIERRA 🌱')
                boton.disabled = true
            }
            seleccionarAtaqueEnemigo()
        })
    })
}


function seleccionarAtaqueEnemigo() {
    ataqueAleatorio = aleatorio(0, ataquesMokeponEnemigo.length - 1)

    if (ataqueAleatorio == 0 || ataqueAleatorio == 1) {
        ataqueEnemigo.push('FUEGO 🔥')
        alert('El ataque del enemigo es FUEGO 🔥')
    } else if (ataqueAleatorio == 2 || ataqueAleatorio == 3) {
        ataqueEnemigo.push('AGUA 💧')
        alert('El ataque del ememigo es AGUA 💧')
    } else {
        ataqueEnemigo.push('TIERRA 🌱')
        alert('El ataque del enemigo es TIERRA 🌱')
    }

    iniciarBatalla()


}

function iniciarBatalla() {
    if (ataqueJugador.length === 5) {
        batalla()
    }
}

function indexAmbosOponentes(jugador, enemigo) {
    indexJugador = ataqueJugador[jugador]
    indexEnemigo = ataqueEnemigo[enemigo]
}

function batalla() {

    for (let index = 0; index < ataqueJugador.length; index++) {
        if (ataqueJugador[index] === ataqueEnemigo[index]) {
            indexAmbosOponentes(index, index)
            crearMensaje('EMPATASTE')
        } else if ((ataqueJugador[index] === 'FUEGO 🔥' && ataqueEnemigo[index] === 'TIERRA 🌱')) {
            indexAmbosOponentes(index, index)
            crearMensaje('GANASTE')
            victoriasJugador++
            spanVidaJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] === 'TIERRA 🌱' && ataqueEnemigo[index] === 'AGUA 💧') {
            indexAmbosOponentes(index, index)
            crearMensaje('GANASTE')
            victoriasJugador++
            spanVidaJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] === 'AGUA 💧' && ataqueEnemigo[index] === 'FUEGO 🔥') {
            indexAmbosOponentes(index, index)
            crearMensaje('GANASTE')
            victoriasJugador++
            spanVidaJugador.innerHTML = victoriasJugador
        } else {
            indexAmbosOponentes(index, index)
            crearMensaje('PERDISTE')
            victoriasEnemigo++
            spanVidaEnemigo.innerHTML = victoriasEnemigo
        }
    }

    revisarVidas()
}

function revisarVidas() {
    if (victoriasJugador > victoriasEnemigo) {
        crearMensajeFinal('HAS GANADO')
    } else if (victoriasEnemigo > victoriasJugador) {
        crearMensajeFinal('EL ENEMIGO HA GANADO')
    } else {
        crearMensajeFinal('HAN EMPATADO')
    }
}

function crearMensaje(resultadoBatalla) {

    sectionMensaje.innerHTML = resultadoBatalla
    let nuevoAtaqueJugador = document.createElement('p')
    nuevoAtaqueJugador.innerHTML = indexJugador
    let nuevoAtaqueEnemigo = document.createElement('p')
    nuevoAtaqueEnemigo.innerHTML = indexEnemigo

    ataqueDelJugador.appendChild(nuevoAtaqueJugador)
    ataqueDelEnemigo.appendChild(nuevoAtaqueEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    let parrafo = document.createElement('p')

    sectionMensaje.innerHTML = resultadoFinal

    sectionReiniciar.style.display = 'block'
}

function reiniciar() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)
